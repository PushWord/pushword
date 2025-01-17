<?php

namespace Pushword\Conversation\Repository;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Pushword\Conversation\Entity\Message;

/**
 * @extends ServiceEntityRepository<Message>
 */
class MessageRepository extends ServiceEntityRepository
{
    public function __construct(
        ManagerRegistry $registry,
    ) {
        parent::__construct($registry, Message::class);
    }

    /**
     * @return Message[]
     */
    public function getMessagesPublishedByReferring(string $referring, string $orderBy = 'createdAt DESC', int $limit = 0): mixed
    {
        $orderBy = explode(' ', $orderBy);

        $queryBuilder = $this->createQueryBuilder('m')
            ->andWhere('m.publishedAt is NOT NULL')
            ->andWhere('m.referring =  :referring')
            ->setParameter('referring', $referring)
            ->orderBy('m.'.$orderBy[0], $orderBy[1]);
        if (0 !== $limit) {
            $queryBuilder->setMaxResults($limit);
        }

        return $queryBuilder->getQuery()->getResult();
    }
}
