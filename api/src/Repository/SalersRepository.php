<?php

namespace App\Repository;

use App\Entity\Salers;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Salers|null find($id, $lockMode = null, $lockVersion = null)
 * @method Salers|null findOneBy(array $criteria, array $orderBy = null)
 * @method Salers[]    findAll()
 * @method Salers[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SalersRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Salers::class);
    }

    // /**
    //  * @return Salers[] Returns an array of Salers objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Salers
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
