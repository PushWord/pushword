<?php

namespace Pushword\Core\Utils;

use Michelf\MarkdownExtra;
use Override;

class MarkdownParser extends MarkdownExtra
{
    public function __construct()
    {
        parent::__construct();

        unset($this->block_gamut['doCodeBlocks']);  // break everything witht twig includes
    }

    /**
     * Simplify detab.
     *
     * @param string $text
     */
    #[Override]
    protected function detab($text): string
    {
        return str_replace("\t", str_repeat(' ', $this->tab_width), $text);
    }

    #[Override]
    protected function _initDetab(): void
    {
    }
}
