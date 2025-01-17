<?php

namespace Pushword\PageScanner\Scanner;

use Pushword\Core\Entity\Page;
use Symfony\Contracts\Translation\TranslatorInterface;

/**
 * Permit to find error in image or link.
 */
abstract class AbstractScanner
{
    protected Page $page;

    protected string $pageHtml;

    /**
     * @var string[]
     */
    protected array $errors = [];

    public function __construct(
        protected readonly TranslatorInterface $translator
    ) {
    }

    public function addError(string $msg): void
    {
        $this->errors[] = $msg;
    }

    /**
     * @return string[]
     */
    public function scan(Page $page, string $pageHtml): array
    {
        $this->errors = [];
        $this->page = $page;
        $this->pageHtml = $pageHtml;

        $this->run();

        return $this->errors;
    }

    abstract protected function run(): void;

    /**
     * Undocumented function.
     *
     * @param mixed[] $parameters
     */
    public function trans(string $id, array $parameters = [], ?string $domain = null, ?string $locale = null): string
    {
        return $this->translator->trans($id, $parameters, $domain, $locale);
    }
}
