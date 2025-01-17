<?php

namespace Pushword\StaticGenerator\Generator;

use Override;

class HtaccessGenerator extends PageGenerator
{
    #[Override]
    public function generate(?string $host = null): void
    {
        $this->init($host);

        $htaccess = $this->twig->render($this->apps->get()->getView('/htaccess.twig', '@pwStaticGenerator'), [
            'domain' => $this->app->getMainHost(),
            'redirections' => $this->getRedirections(),
        ]);
        $this->filesystem->dumpFile($this->getStaticDir().'/.htaccess', $htaccess);
    }

    /**
     * The function cache redirection found during generatePages and
     * format in self::$redirection the content for the .htaccess.
     */
    protected function getRedirections(): string
    {
        $return = '';
        foreach ($this->redirectionManager->get() as $r) {
            $return .= 'Redirect '.$r[2].' '.$r[0].' '.$r[1].\PHP_EOL;
        }

        return $return;
    }
}
