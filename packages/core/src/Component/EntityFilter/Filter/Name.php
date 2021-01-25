<?php

namespace Pushword\Core\Component\EntityFilter\Filter;

class Name extends AbstractFilter
{
    use RequiredAppTrait;
    use RequiredManagerTrait;

    /** @return ?string */
    public function apply($name)
    {
        $names = explode("\n", $name);

        return $names[0] ? trim($names[0]) : (null !== $name ? $name : $this->entityFilterManager->getH1());
    }
}
