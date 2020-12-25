<?php

namespace Pushword\PageUpdateNotifier\Tests;

use App\Entity\Page;
use Nette\Utils\FileSystem;
use Pushword\Core\Component\App\AppPool;
use Pushword\Core\Entity\SharedTrait\CustomPropertiesTrait;
use Pushword\PageUpdateNotifier\PageUpdateNotifier;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\Mailer\Mailer;
use Symfony\Component\Mailer\Transport\AbstractTransport;
use Symfony\Component\Validator\Context\ExecutionContextInterface;
use Symfony\Component\Validator\Violation\ConstraintViolationBuilderInterface;

class PageUpdateNotifierTest extends KernelTestCase
{
    protected function getNotifier()
    {
        self::bootKernel();

        $entityManager = self::$kernel->getContainer()->get('doctrine.orm.default_entity_manager');
        $apps = $this->getApps();
        $translator = self::$kernel->getContainer()->get('translator');
        $twig = self::$kernel->getContainer()->get('twig');
        $mailer = new Mailer($this->getTransporter());

        return new PageUpdateNotifier(
            'App\Entity\Page',
            $mailer,
            $apps,
            sys_get_temp_dir(), // vendor/piedweb/cms-bundle/Sekeleton',
            $entityManager,
            $translator,
            $twig
        );
    }

    protected function getApps(): AppPool
    {
        return self::$kernel->getContainer()->get('pushword.apps');
    }

    protected function getPage()
    {
        return (new Page())
            ->setSlug('page-updater')
            ->setTitle('Just created')
            ->setCreatedAt(new \Datetime());
    }

    public function testNoEmailToException()
    {
        $notifier = $this->getNotifier();
        $this->expectExceptionCode(PageUpdateNotifier::ERROR_NO_EMAIL);
        $notifier->run($this->getPage());
    }

    public function testNoEmailFromException()
    {
        $notifier = $this->getNotifier();
        $this->getApps()->get()->setCustomProperty('page_update_notification_mail', 'contact@example.tld');
        $this->expectExceptionCode(PageUpdateNotifier::ERROR_NO_EMAIL);
        $notifier->run($this->getPage());
    }

    public function testNoIntervalException()
    {
        $notifier = $this->getNotifier();
        $this->getApps()->get()->setCustomProperty('page_update_notification_mail', 'contact@example.tld');
        $this->getApps()->get()->setCustomProperty('notifier_email', 'contact@example.tld');

        $this->expectExceptionCode(PageUpdateNotifier::ERROR_NO_INTERVAL);
        $notifier->run($this->getPage());
    }

    public function testRun()
    {
        $notifier = $this->getNotifier();
        $this->getApps()->get()->setCustomProperty('page_update_notification_mail', 'contact@example.tld');
        $this->getApps()->get()->setCustomProperty('notifier_email', 'contact@example.tld');
        $this->getApps()->get()->setCustomProperty('page_update_notification_interval', 'P1D');

        FileSystem::delete($notifier->getCacheDir());
        $this->assertSame(PageUpdateNotifier::NOTHING_TO_NOTIFY, $notifier->run($this->getPage()));

        self::$kernel->getContainer()->get('doctrine.orm.default_entity_manager')->persist($this->getPage());
        self::$kernel->getContainer()->get('doctrine.orm.default_entity_manager')->flush();

        $this->assertSame('Notify send for 1 page(s)', $notifier->run($this->getPage()));

        $this->assertSame(PageUpdateNotifier::WAS_EVER_RUN_SINCE_INTERVAL, $notifier->run($this->getPage()));

        return;
    }

    /**
     * @return CustomPropertiesTrait
     */
    protected function getCustomPropertiesTrait()
    {
        $mock = $this->getMockForTrait(CustomPropertiesTrait::class);
        //$mock->method('getTitle')->willReturn(true);

        return $mock;
    }

    /**
     * @return AbstractTransport
     */
    protected function getTransporter()
    {
        $mock = $this->createMock(AbstractTransport::class);
        $mock->method('send')->willReturn(null);

        return $mock;
    }

    /**
     * @return ExecutionContextInterface
     */
    protected function getExceptionContextInterface()
    {
        $mockConstraintViolationBuilder = $this->createMock(ConstraintViolationBuilderInterface::class);
        $mockConstraintViolationBuilder->method('atPath')->willReturnSelf();
        $mockConstraintViolationBuilder->method('addViolation')->willReturnSelf();

        $mock = $this->createMock(ExecutionContextInterface::class);
        $mock->method('buildViolation')->willReturnCallback(function ($arg) use ($mockConstraintViolationBuilder) {
            if (\in_array($arg, ['page.customProperties.malformed', 'page.customProperties.notStandAlone'])) {
                new \Error();
            } else {
                return $mockConstraintViolationBuilder;
            }
        });

        return $mock;
    }
}
