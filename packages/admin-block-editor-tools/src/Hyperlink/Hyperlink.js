import css2 from './Hyperlink.css'
import make from './../Abstract/make.js'
import { IconLink, IconUnlink } from '@codexteam/icons'
import { Suggest } from '../../../admin/src/Resources/assets/suggest.js'
import { API, InlineTool, SanitizerConfig, ToolConfig, Selection } from '@editorjs/editorjs'

/**
 * TODO Test it :
 * - When clicking ctrl+k, then pressing ENTER, no link is created and the toolbar is closed
 * - When clicking ctrl+k, pasting value, then pressing ENTER, the link is created and the toolbar is closed
 *
 * @implements {InlineTool}
 */
export default class Hyperlink {
  /** @type {API} */
  api
  /** @type {ToolConfig} */
  config

  /** @param {{ config: ToolConfig, api: API }} options  */
  constructor({ config, api }) {
    this.api = api
    this.config = config
    this.CSS = {
      //button: 'ce-inline-tool',
      buttonActive: 'ce-inline-tool--active',
      //buttonModifier: 'ce-inline-tool--link',
      buttonUnlink: 'ce-inline-tool--unlink',
      input: 'plugin-option-input',
      select: 'plugin-option-input',
    }
    this.availableDesign = this.config.availableDesign || [
      ['bouton', 'link-btn'],
      ['discret', 'ninja'], //text-current no-underline border-0 font-normal
    ]
    /**
     * @type {
     *  wrapper: HTMLElement | null,
     *  input: HTMLInputElement | null,
     *  selectTarget: HTMLSelectElement | null,
     *  selectDesign: HTMLSelectElement | null,
     *  hideForBot: HTMLInputElement | null,
     *  targetBlank: HTMLInputElement | null,
     *  unlinkButton: HTMLButtonElement | null
     *  linkButton: HTMLButtonElement | null
     * }
     */
    this.nodes = {
      wrapper: null,
      input: null,
      selectTarget: null,
      selectDesign: null,
      hideForBot: null,
      targetBlank: null,
      button: null,
      linkButton: null,
      unlinkButton: null,
    }

    /** @type {boolean} */
    this.inputOpened = false

    /** @type {HTMLElement | null} */
    this.anchorTag = null
  }

  /** @returns {HTMLElement} */
  render() {
    this.nodes.button = document.createElement('button')
    this.nodes.button.type = 'button'
    this.nodes.button.classList.add(this.api.styles.inlineToolButton)

    this.nodes.unlinkButton = make.element('span', '', {}, IconUnlink)
    this.nodes.unlinkButton.style.display = 'none'
    this.nodes.button.appendChild(this.nodes.unlinkButton)

    this.nodes.linkButton = make.element('span', '', {}, IconLink)
    this.nodes.button.appendChild(this.nodes.linkButton)
    return this.nodes.button
  }

  toggleButton(showUnlink = true) {
    console.log('toggleButton')
    if (showUnlink) this.nodes.button?.classList.add(this.api.styles.inlineToolButtonActive)
    else this.nodes.button?.classList.remove(this.api.styles.inlineToolButtonActive)

    this.nodes.linkButton.style.display = showUnlink ? 'none' : ''
    this.nodes.unlinkButton.style.display = showUnlink ? '' : 'none'
  }

  /**
   *
   * @param {Selection} selection
   */
  checkState(selection) {
    console.log('checkState')

    const anchorTag = this.anchorTag || this.api.selection.findParentTag('A')
    if (!anchorTag) {
      this.toggleButton(false)
      return
    }

    this.anchorTag = anchorTag
    this.toggleButton()
    //this.openActions()
    this.updateActionValues()

    console.log('checkState ended')
    return !!anchorTag
  }

  updateActionValues() {
    if (!this.nodes.input) return
    const hrefAttr = this.anchorTag.getAttribute('href')
    this.nodes.input.value = !!hrefAttr ? hrefAttr : ''

    const relAttr = this.anchorTag.getAttribute('rel')
    this.nodes.hideForBot.querySelector('input').checked = !!relAttr ? true : false

    const targetAttr = this.anchorTag.getAttribute('target')
    this.nodes.targetBlank.querySelector('input').checked = !!targetAttr ? true : false

    const designAttr = this.anchorTag.getAttribute('class')
    this.nodes.selectDesign.value = designAttr ? designAttr : ''
  }

  renderActions() {
    console.log('renderActions', this.nodes.input)
    if (this.nodes.input) return this.nodes.wrapper
    this.nodes.input = make.element('input', this.api.styles.input, { placeholder: 'https://...' })

    this.nodes.suggester = make.element('div', 'textSuggester', { style: 'display:none' })
    const options = { highlight: true, dispMax: 20, dispAllKey: true }
    new Suggest.Local(this.nodes.input, this.nodes.suggester, window.pagesUriList ?? [], options)

    this.nodes.hideForBot = make.switchInput('hideForBot', this.api.i18n.t('Obfusquer'))
    this.nodes.targetBlank = make.switchInput('targetBlank', this.api.i18n.t('Nouvel onglet'))

    this.nodes.selectDesign = make.element('select', this.api.styles.input)
    //this.nodes.selectDesign.name = 'style'
    make.option(this.nodes.selectDesign, '', this.api.i18n.t('Style'), { style: 'opacity: 0.5' })
    for (let i = 0; i < this.availableDesign.length; i++) {
      make.option(this.nodes.selectDesign, this.availableDesign[i][1], this.availableDesign[i][0])
    }
    if (!!this.config.design) {
      this.nodes.selectDesign.value = this.config.design
    }

    this.nodes.wrapper = document.createElement('div')
    this.nodes.wrapper.classList.add('link-options-wrapper')
    this.nodes.wrapper.append(this.nodes.input, this.nodes.suggester, this.nodes.hideForBot, this.nodes.targetBlank, this.nodes.selectDesign)

    // sauvegarde lors d'un changement
    this.nodes.wrapper.addEventListener('change', (event) => {
      this.updateLink()
    })

    // sauvegarde lors de ENTER
    this.nodes.input.addEventListener('keydown', (event) => {
      if (event.keyCode === 13) {
        console.log('press ENTER')
        event.preventDefault()
        event.stopPropagation()
        event.stopImmediatePropagation()
        this.updateLink()
        this.closeActions()
      }
    })

    console.log('renderActions ended')
    return this.nodes.wrapper
  }

  /** @param {Range} range */
  surround(range) {
    console.log('surroud')
    if (!range) {
      return
    }

    const termWrapper = this.api.selection.findParentTag('A')
    console.log(termWrapper)
    if (termWrapper) {
      this.unlink(termWrapper)
      this.checkState()
      this.api.toolbar.close()
      return
    } else {
      this.anchorTag = document.createElement('A')
      this.anchorTag.appendChild(range.extractContents())
      range.insertNode(this.anchorTag)
      this.api.selection.expandToTag(this.anchorTag)
    }
    this.toggleActions()
  }

  get shortcut() {
    return 'CMD+K'
  }

  static get isInline() {
    return true
  }

  /**
   * @returns {SanitizerConfig}
   */
  static get sanitize() {
    return {
      a: {
        href: true,
        target: true,
        rel: true,
        class: true,
      },
    }
  }

  toggleActions() {
    console.log('toggleActions', this.inputOpened)
    if (!this.inputOpened) {
      this.openActions(true)
    } else {
      this.closeActions()
    }
  }

  openActions(needFocus = false) {
    console.log('openActions')
    this.nodes.wrapper.style.display = 'block'
    if (needFocus) {
      this.api.selection.expandToTag(this.anchorTag)
      this.api.selection.setFakeBackground()
      this.api.selection.save()
      this.nodes.input.focus()
    }
    this.inputOpened = true
  }

  closeActions() {
    let value = this.nodes.input.value || ''
    if (!value.trim()) this.unlink()
    this.api.selection.restore()
    this.api.selection.removeFakeBackground()
    this.inputOpened = false
    this.api.toolbar.close()
  }

  updateLink() {
    let href = this.nodes.input.value || ''
    this.anchorTag.setAttribute('href', href)

    let target = this.nodes.targetBlank.querySelector('input').checked ? '_blank' : ''
    if (!!target) {
      this.anchorTag.setAttribute('target', target)
    } else {
      this.anchorTag.removeAttribute('target')
    }

    let rel = this.nodes.hideForBot.querySelector('input').checked ? 'obfuscate' : ''
    if (!!rel) {
      this.anchorTag.setAttribute('rel', rel)
    } else {
      this.anchorTag.removeAttribute('rel')
    }

    let design = this.nodes.selectDesign.value || ''
    if (!!design) {
      this.anchorTag.className = design
    } else {
      this.anchorTag.removeAttribute('class')
    }

    return this.anchorTag
  }

  unlink(termWrapper) {
    console.log('- unlink', termWrapper)
    termWrapper = termWrapper || this.anchorTag

    this.api.selection.expandToTag(termWrapper)
    console.log(window.getSelection())
    const sel = window.getSelection()
    if (!sel) return

    const range = sel.getRangeAt(0)
    if (!range) return

    const unwrappedContent = range.extractContents()
    if (!unwrappedContent) return

    // Remove empty term-tag
    termWrapper.parentNode?.removeChild(termWrapper)
    range.insertNode(unwrappedContent)
    sel.removeAllRanges()
    sel.addRange(range)
    console.log('removed')
  }
}
