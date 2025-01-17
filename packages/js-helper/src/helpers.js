import 'core-js/stable'
import 'regenerator-runtime/runtime'
/**
 * List of all functions
 *
 * - liveBlock(attr)
 * - liveForm(attr)
 *
 * -  seasonedBackground
 * - responsiveImage(string)  Relative to Liip filters
 * - uncloakLinks(attr)
 * - convertFormFromRot13(attr)
 * - readableEmail(attr)
 * - convertImageLinkToWebPLink()
 */

/**
 * Live Block Watcher (and button)
 *
 * Fetch (ajax) function permitting to get block via a POST request
 *
 * @param {string} attribute
 */
export function liveBlock(liveBlockAttribute = 'data-live', liveFormSelector = '.live-form') {
  var btnToBlock = function (event, btn) {
    const liveBlockUrl = btn.getAttribute('src-' + liveBlockAttribute)
    if (btn.hasAttribute('data-target') && btn.getAttribute('data-target') == 'parent') {
      btn = btn.parentElement ?? btn
    }
    btn.setAttribute(liveBlockAttribute, liveBlockUrl)
    getLiveBlock(btn)
  }

  var getLiveBlock = function (item) {
    var url = item.getAttribute(liveBlockAttribute)
    url = url.startsWith('e:') ? convertShortchutForLink(rot13ToText(url.substring(2))) : url
    fetch(url, {
      //headers: { "Content-Type": "application/json", Accept: "text/plain" },
      method: 'POST',
      credentials: 'include',
    })
      .then(function (response) {
        return response.text()
      })
      .then(function (body) {
        item.removeAttribute(liveBlockAttribute)
        item.outerHTML = body
      })
      .then(function () {
        document.dispatchEvent(new Event('DOMChanged'))
      })
  }

  const spinner = '<span style="border-top-color: transparent" class="inline-block w-5 h-5 border-4 border-gray-50 border-solid rounded-full animate-spin"></span>'
  const htmlLoader = '<div>' + spinner.replace('border-gray-50', 'border-gray-800') + '</div>'

  var setLoader = function (form) {
    var $submitButton = getSubmitButton(form)
    if ($submitButton !== undefined) {
      //var initialButton = $submitButton.outerHTML;
      $submitButton.innerHTML = ''
      $submitButton.outerHTML = htmlLoader
    }
  }

  var sendForm = function (form, liveFormBlock) {
    setLoader(form)

    var formData = new FormData(form.srcElement)
    fetch(form.srcElement.action, {
      method: 'POST',
      body: formData,
      credentials: 'include',
    })
      .then(function (response) {
        return response.text()
      })
      .then(function (body) {
        liveFormBlock.outerHTML = body
      })
      .then(function () {
        document.dispatchEvent(new Event('DOMChanged'))
      })
  }

  var getSubmitButton = function (form) {
    if (form.srcElement.querySelector('[type=submit]') !== null) {
      return form.srcElement.querySelector('[type=submit]')
    }
    if (form.srcElement.getElementsByTagName('button') !== null) {
      return form.srcElement.getElementsByTagName('button')[0]
    }
    return null
  }

  // Listen data-live
  document.querySelectorAll('[' + liveBlockAttribute + ']').forEach((item) => {
    getLiveBlock(item)
  })

  // Listen button src-data-live
  document.querySelectorAll('[src-' + liveBlockAttribute + ']').forEach((item) => {
    item.addEventListener('click', (event) => {
      if (item.tagName == 'BUTTON') {
        item.innerHTML = spinner
        item.setAttribute('disabled', true)
      }
      btnToBlock(event, item)
    })
  })

  // Listen live-form
  document.querySelectorAll(liveFormSelector).forEach((item) => {
    if (item.querySelector('form') !== null) {
      item.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault()
        sendForm(e, item)
      })
    }
  })
}

/**
 * Block to replace Watcher
 * On $event on element find via $attribute, set attribute's content in element.innerHTML
 */
export function replaceOn(attribute = 'replaceBy', eventName = 'click') {
  var loadVideo = function (element) {
    var content = element.getAttribute(attribute)
    if (element.classList.contains('hero-banner-overlay-lg') && element.querySelector('picture') && window.innerWidth < 992) {
      element.querySelector('picture').outerHTML = content
      element.querySelector('.btn-play').outerHTML = ' '
    } else {
      element.innerHTML = content
    }
    if (element.classList.contains('hero-banner-overlay-lg')) {
      element.style.zIndex = '2000'
    }
    element.removeAttribute(attribute)
    document.dispatchEvent(new Event('DOMChanged'))
  }

  document.querySelectorAll('[' + attribute + ']:not([listen])').forEach(function (element) {
    element.setAttribute('listen', '')
    element.addEventListener(
      eventName,
      function (event) {
        loadVideo(event.currentTarget) //event.currentTarget;
        element.removeAttribute('listen')
      },
      { once: true },
    )
  })
}

/**
 *
 *
 */
export function seasonedBackground() {
  document.querySelectorAll('[x-hash]').forEach(function (element) {
    if (window.location.hash) {
      if (element.getAttribute('x-hash') == window.location.hash.substring(1)) {
        element.parentNode.parentNode.querySelectorAll('img').forEach(function (img) {
          img.style = 'display:none'
        })
        element.style = 'display:block'
      }
    }
  })
}

/**
 * Transform image's path (src) produce with Liip to responsive path
 *
 * @param {string} src
 */
export function responsiveImage(src) {
  var screenWidth = window.innerWidth
  if (screenWidth <= 576) {
    src = src.replace('/default/', '/xs/')
  } else if (screenWidth <= 768) {
    src = src.replace('/default/', '/sm/')
  } else if (screenWidth <= 992) {
    src = src.replace('/default/', '/md/')
  } else if (screenWidth <= 1200) {
    src = src.replace('/default/', '/lg/')
  } else {
    // 1200+
    src = src.replace('/default/', '/xl/')
  }

  return src
}

export function addClassForNormalUser(attribute = 'data-acinb') {
  var startScrolling = 0
  function scrollEventAddClassHandler() {
    if (startScrolling < 5) {
      startScrolling++
    }
    if (startScrolling === 4) {
      document.removeEventListener('scroll', scrollEventAddClassHandler)
      ;[].forEach.call(document.querySelectorAll('[' + attribute + ']'), function (element) {
        var classToAddRaw = element.getAttribute(attribute)
        var classToAdd = classToAddRaw.split(' ')
        element.removeAttribute(attribute)
        element.classList.add(...classToAdd)
        if (classToAdd.includes('block')) {
          element.classList.remove('hidden')
        }
      })
      if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash)
        if (targetElement) {
          // open show more block if exists
          const showMoreTarget = targetElement.closest('.show-more')
          if (showMoreTarget) {
            showMoreTarget.querySelector('.show-more-btn label').click()
          }
          targetElement.scrollIntoView({
            behavior: 'smooth',
          })
        }
      }
    }
  }
  document.addEventListener('scroll', scrollEventAddClassHandler, { passive: true })
}
/**
 * Convert elements wich contain attribute (data-href) in normal link (a href)
 * You can use a callback function to decrypt the link (eg: rot13ToText ;-))
 *
 * @param {string}  attribute
 */
export async function uncloakLinks(attribute = 'data-rot', onClickMouseoverOrTouchstart = true) {
  var convertLink = function (element) {
    // fix "bug" with img
    if (element.getAttribute(attribute) === null) {
      var element = element.closest('[' + attribute + ']')
    }
    if (element === null || element.getAttribute(attribute) === null) return
    var link = document.createElement('a')
    var href = element.getAttribute(attribute)
    element.removeAttribute(attribute)
    for (var i = 0, n = element.attributes.length; i < n; i++) {
      link.setAttribute(element.attributes[i].nodeName, element.attributes[i].nodeValue)
    }
    link.innerHTML = element.innerHTML
    link.setAttribute('href', responsiveImage(convertShortchutForLink(rot13ToText(href))))
    element.replaceWith(link)
    return link
  }

  var convertAll = function (attribute) {
    ;[].forEach.call(document.querySelectorAll('[' + attribute + ']'), function (element) {
      convertLink(element)
    })
  }

  var fireEventLinksBuilt = async function (element, event) {
    await document.dispatchEvent(new Event('DOMChanged'))

    var clickEvent = new Event(event.type)
    element.dispatchEvent(clickEvent)
  }

  var convertLinkOnEvent = async function (event) {
    // convert them all if it's an image (thanks this bug), permit to use gallery (baguetteBox)
    if (event.target.tagName == 'IMG') {
      await convertAll(attribute)
      var element = event.target
    } else {
      var element = convertLink(event.target)
    }
    if (element) fireEventLinksBuilt(element, event)
  }

  if (onClickMouseoverOrTouchstart) {
    ;[].forEach.call(document.querySelectorAll('[' + attribute + ']'), function (element) {
      element.addEventListener(
        'touchstart',
        function (e) {
          convertLinkOnEvent(e)
        },
        { once: true, passive: true },
      )
      element.addEventListener(
        'click',
        function (e) {
          convertLinkOnEvent(e)
        },
        { once: true },
      )
      element.addEventListener(
        'mouseover',
        function (e) {
          convertLinkOnEvent(e)
        },
        { once: true },
      )
    })
  } else convertAll(attribute)
}

/**
 * Convert action attr encoded in rot 13 to normal action with default attr `data-frot`
 *
 * @param {string}  attribute
 */
export function convertFormFromRot13(attribute = 'data-frot') {
  ;[].forEach.call(document.querySelectorAll('[' + attribute + ']'), function (element) {
    var action = element.getAttribute(attribute)
    element.removeAttribute(attribute)
    element.setAttribute('action', convertShortchutForLink(rot13ToText(action)))
  })
}

export function convertShortchutForLink(str) {
  if (str.charAt(0) == '-') {
    return 'http://' + str.substring(1)
  }
  if (str.charAt(0) == '_') {
    return 'https://' + str.substring(1)
  }
  if (str.charAt(0) == '@') {
    return 'mailto:' + str.substring(1)
  }
  return str
}

/**
 * readableEmail(selector) Transform an email encoded with rot13 in a readable mail (and add mailto:)
 *
 * @param {string}  text
 */
export function readableEmail(selector) {
  document.querySelectorAll(selector).forEach(function (item) {
    var mail = rot13ToText(item.textContent).trim()
    item.classList.remove('hidden')
    item.innerHTML = '<a href="mailto:' + mail + '">' + mail + '</a>'
    if (selector.charAt(0) == '.') {
      item.classList.remove(selector.substring(1))
    }
  })
}

/**
 * Decode rot13
 *
 * @param {string}  str
 */
export function rot13ToText(str) {
  return str.replace(/[a-zA-Z]/g, function (c) {
    return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26)
  })
}

export function testWebPSupport() {
  var elem = document.createElement('canvas')

  if (elem.getContext && elem.getContext('2d')) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0
  }

  return false
}

/**
 * Used in ThemeComponent
 */
export function convertImageLinkToWebPLink() {
  var switchToWebP = function () {
    ;[].forEach.call(document.querySelectorAll('a[dwl]'), function (element) {
      var href = responsiveImage(element.getAttribute('dwl'))
      element.setAttribute('href', href)
      element.removeAttribute('dwl')
    })
  }

  if (testWebPSupport()) switchToWebP()
}
