<?php

namespace Pushword\Core\Entity\PageTrait;

use Cocur\Slugify\Slugify;
use Doctrine\ORM\Mapping as ORM;
use Pushword\Core\Utils\F;

trait PageTrait
{
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 150)]
    protected string $slug = '';

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::STRING, length: 255)]
    protected string $h1 = '';

    /**
     * RawContent would have been a more appropriate name.
     */
    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::TEXT)]
    protected string $mainContent = '';

    #[ORM\Column(type: \Doctrine\DBAL\Types\Types::DATETIME_MUTABLE, options: ['default' => 'CURRENT_TIMESTAMP'])]
    protected ?\DateTimeInterface $publishedAt = null;  // @phpstan-ignore-line

    public function __toString(): string
    {
        return trim($this->host.'/'.$this->getSlug().' ');
    }

    public function getH1(): ?string
    {
        return $this->h1;
    }

    public function setH1(?string $h1): self
    {
        $this->h1 = (string) $h1;

        return $this;
    }

    public function getSlug(): string
    {
        return '' === $this->slug ? (string) $this->id : $this->slug;
    }

    public function getRealSlug(): string
    {
        return 'homepage' === $this->getSlug() ? '' : $this->getSlug();
    }

    public static function normalizeSlug(string $slug): string
    {
        $slugify = new Slugify(['regexp' => '/[^A-Za-z0-9_\/\.]+/']);
        $slug = $slugify->slugify($slug);

        return trim($slug, '/');
    }

    public function setSlug(?string $slug): self
    {
        if (null === $slug) { // work around for disabled input in sonata admin
            // if ('' === $this->slug) throw new \ErrorException('slug cant be empty.');
        } else {
            $this->slug = static::normalizeSlug($slug);
        }

        return $this;
    }

    public function getMainContent(): string
    {
        return $this->mainContent;
    }

    public function setMainContent(?string $mainContent): self
    {
        $this->mainContent = (string) $mainContent;
        // clean empty link added by editor.js
        $this->mainContent = F::preg_replace_str('@<a[^>]+"></a>@U', '', $this->mainContent);

        return $this;
    }

    /**
     * Get the value of publishedAt.
     */
    public function getPublishedAt(bool $safe = true): ?\DateTimeInterface
    {
        if (! $safe) {
            return $this->publishedAt;
        }

        if (null !== $this->publishedAt) {
            return $this->publishedAt;
        }

        return new \DateTime();
    }

    public function setPublishedAt(\DateTimeInterface $publishedAt): self
    {
        $this->publishedAt = $publishedAt;

        return $this;
    }

    public function isPublished(): bool
    {
        return $this->publishedAt <= new \DateTime('now');
    }
}
