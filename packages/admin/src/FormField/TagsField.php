<?php

namespace Pushword\Admin\FormField;

use Pushword\Core\Entity\Page;

use function Safe\json_encode;

use Sonata\AdminBundle\Form\FormMapper;
use Symfony\Component\Form\Extension\Core\Type\TextType;

/**
 * @template T of Page
 *
 * @extends AbstractField<Page>
 */
class TagsField extends AbstractField
{
    public function formField(FormMapper $form): void
    {
        $page = $this->admin->getSubject();

        $pageRepo = $this->admin->getEntityManager()->getRepository(Page::class);

        $host = $this->admin->getRequest()->query->getString('host', $page->getHost());
        $allTags = $pageRepo->getAllTags($host);

        $form->add('tags', TextType::class, [
            'required' => false,
            'attr' => [
                'class' => 'textarea-no-newline tagsField',
                'placeholder' => 'admin.page.tags.label',
                'data-tags' => json_encode($allTags),
                // 'data-search-results-hook' => 'suggestSearchHookForPageTags', // data-search-results-hook=suggestSearchHookForPageTags
                'autofocus' => '',
            ],
            'row_attr' => [
                'class' => 'tagsFieldWrapper ce-block__content',
            ],
            'label' => ' ',
            'help' => ' <div class="textSuggester" style="display:none;"></div>'
                .'<script>setTimeout(function () {
                    const element = document.querySelector("'.(null === $page->getId() ? '[data-tags]' : '[id$=_h1] textarea').'");
                    element.focus();
                    element.selectionStart = element.selectionEnd = element.value.length;
                }, 500)</script>',
            'help_html' => true,
        ]);
    }// .($page->getId() === null ?
}
