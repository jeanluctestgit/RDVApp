<?php

namespace App\DataFixtures;
use App\Entity\Salers;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class SalersFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        // $product = new Product();
        // $manager->persist($product);
        $salers = new Salers();

        $salers->setNom("Pignon")
               ->setPrenom("Francois")
               ->setTelephone("0123456789")
               ->setEmail("francois.pignon@dinner.com");
        $manager->persist($salers);

        
        $salers1 = new Salers();

        $salers1->setNom("Leblanc")
               ->setPrenom("Juste")
               ->setTelephone("9876543211")
               ->setEmail("juste.leblanc@dinner.com");
        $manager->persist($salers1);

        $salers2 = new Salers();
        

        $salers2->setNom("Sassoeur")
               ->setPrenom("Marlene")
               ->setTelephone("3216547896")
               ->setEmail("marlene.sassoeur@dinner.com");
        $manager->persist($salers2);

        $manager->flush();
    }
}
