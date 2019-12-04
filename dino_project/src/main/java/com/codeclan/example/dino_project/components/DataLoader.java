package com.codeclan.example.dino_project.components;

import com.codeclan.example.dino_project.models.Dinosaur;
import com.codeclan.example.dino_project.models.Genus;
import com.codeclan.example.dino_project.models.Paddock;
import com.codeclan.example.dino_project.repositories.dinos.DinosaurRepository;
import com.codeclan.example.dino_project.repositories.genus.GenuRepository;
import com.codeclan.example.dino_project.repositories.paddocks.PaddockRepository;
import com.codeclan.example.dino_project.repositories.parks.ParkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    DinosaurRepository dinosaurRepository;

    @Autowired
    PaddockRepository paddockRepository;

    @Autowired
    ParkRepository parkRepository;

    @Autowired
    GenuRepository genuRepository;

    public DataLoader(){

    }

    public void run(ApplicationArguments args){

        Genus tRex = new Genus();
        tRex.setGenus("T-Rex");
        tRex.setType("carnivore");
        genuRepository.save(tRex);

        Genus velociraptor = new Genus();
        velociraptor.setGenus("Velociraptor");
        velociraptor.setType("carnivore");
        genuRepository.save(velociraptor);

        Genus brontosaurus = new Genus();
        brontosaurus.setGenus("Brontosaurus");
        brontosaurus.setType("herbivore");
        genuRepository.save(brontosaurus);

        Genus silvisaurus = new Genus();
        silvisaurus.setGenus("Silvisaurus");
        silvisaurus.setType("herbivore");
        genuRepository.save(silvisaurus);

        Genus lirainosaurus = new Genus();
        lirainosaurus.setGenus("Lirainosaurus");
        lirainosaurus.setType("herbivore");
        genuRepository.save(lirainosaurus);

        Genus iguanodone = new Genus();
        iguanodone.setGenus("Iguanodone");
        iguanodone.setType("herbivore");
        genuRepository.save(iguanodone);

        Genus galliminus = new Genus();
        galliminus.setGenus("Galliminus");//here
        galliminus.setType("herbivore");
        genuRepository.save(galliminus);

        Genus isanosaurus = new Genus();
        isanosaurus.setGenus("Isanosaurus");
        isanosaurus.setType("herbivore");
        genuRepository.save(isanosaurus);

        Genus ichthyosaurus = new Genus();
        ichthyosaurus.setGenus("Ichthyosaurus");
        ichthyosaurus.setType("carnivore");
        genuRepository.save(ichthyosaurus);


        Genus mosasaurus = new Genus();
        mosasaurus.setGenus("Mosasaurus");
        mosasaurus.setType("carnivore");
        genuRepository.save(mosasaurus);

        Genus diplodocus = new Genus();
        diplodocus.setGenus("Diplodocus");
        diplodocus.setType("herbivore");
        genuRepository.save(diplodocus);

        Genus styracosaurus = new Genus();
        styracosaurus.setGenus("Styracosaurus");
        styracosaurus.setType("herbivore");
        genuRepository.save(styracosaurus);

        Genus baryonyx = new Genus();
        baryonyx.setGenus("Baryonyx");
        baryonyx.setType("carnivore");
        genuRepository.save( baryonyx);

        Genus stegosaurus = new Genus();
        stegosaurus.setGenus("Stegosaurus");
        stegosaurus.setType("herbivore");
        genuRepository.save( stegosaurus);

        Genus carnotaurus = new Genus();
        carnotaurus.setGenus("carnotaurus");
        carnotaurus.setType("carnivore");
        genuRepository.save( carnotaurus);

        Genus tsintaosaurus = new Genus();
        tsintaosaurus.setGenus("Tsintaosaurus");
        tsintaosaurus.setType("herbivore");
        genuRepository.save( tsintaosaurus);

        Genus ankilosaurus = new Genus();
        ankilosaurus.setGenus("Ankilosaurus");
        ankilosaurus.setType("herbivore");
        genuRepository.save( ankilosaurus);

        Genus parasaurolophus = new Genus();
        parasaurolophus.setGenus("Parasaurolophus");
        parasaurolophus.setType("herbivore");
        genuRepository.save( parasaurolophus);

        Paddock paddock1 = new Paddock("Happy Paddock");//carnivore
        Paddock paddock2 = new Paddock("Dirty Paddock");
        paddockRepository.save(paddock1);
        paddockRepository.save(paddock2);

        Dinosaur dinosaur1 = new Dinosaur(50, tRex, paddock1);
        Dinosaur dinosaur2 = new Dinosaur(0, velociraptor, paddock1);
        Dinosaur dinosaur3 = new Dinosaur(0, brontosaurus, paddock2);
        Dinosaur dinosaur4 = new Dinosaur(20, silvisaurus, paddock2);
        Dinosaur dinosaur5 = new Dinosaur(10, lirainosaurus, paddock2);
        Dinosaur dinosaur6 = new Dinosaur(0, iguanodone, paddock2);
        Dinosaur dinosaur7 = new Dinosaur(20, galliminus, paddock2);
        Dinosaur dinosaur8 = new Dinosaur(20, isanosaurus, paddock2);
        Dinosaur dinosaur9 = new Dinosaur(10, ichthyosaurus, paddock1);
        Dinosaur dinosaur10 = new Dinosaur(30, mosasaurus, paddock1);
        Dinosaur dinosaur11 = new Dinosaur(10, diplodocus, paddock2);
        Dinosaur dinosaur12 = new Dinosaur(20, styracosaurus, paddock2);
        Dinosaur dinosaur13 = new Dinosaur(10, baryonyx, paddock1);
        Dinosaur dinosaur14 = new Dinosaur(40, stegosaurus, paddock2);
        Dinosaur dinosaur15 = new Dinosaur(40,  carnotaurus, paddock1);
        Dinosaur dinosaur16 = new Dinosaur(10,  tsintaosaurus, paddock2);
        Dinosaur dinosaur17 = new Dinosaur(20,  ankilosaurus, paddock2);
        Dinosaur dinosaur18 = new Dinosaur(40,  parasaurolophus, paddock2);


        dinosaurRepository.save(dinosaur1);
        dinosaurRepository.save(dinosaur2);
        dinosaurRepository.save(dinosaur3);
        dinosaurRepository.save(dinosaur4);
        dinosaurRepository.save(dinosaur5);
        dinosaurRepository.save(dinosaur6);
        dinosaurRepository.save(dinosaur7);
        dinosaurRepository.save(dinosaur8);
        dinosaurRepository.save(dinosaur9);
        dinosaurRepository.save(dinosaur10);
        dinosaurRepository.save(dinosaur11);
        dinosaurRepository.save(dinosaur12);
        dinosaurRepository.save(dinosaur13);
        dinosaurRepository.save(dinosaur14);
        dinosaurRepository.save(dinosaur15);
        dinosaurRepository.save(dinosaur16);
        dinosaurRepository.save(dinosaur17);
        dinosaurRepository.save(dinosaur18);

    }
}
