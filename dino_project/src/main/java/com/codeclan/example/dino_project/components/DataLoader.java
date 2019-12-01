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

        Paddock paddock1 = new Paddock("Happy Paddock");
        Paddock paddock2 = new Paddock("Dirty Paddock");
        paddockRepository.save(paddock1);
        paddockRepository.save(paddock2);

        Dinosaur dinosaur1 = new Dinosaur(100, tRex, paddock1);
        Dinosaur dinosaur2 = new Dinosaur(0, velociraptor, paddock1);
        Dinosaur dinosaur3 = new Dinosaur(0, brontosaurus, paddock2);


        dinosaurRepository.save(dinosaur1);
        dinosaurRepository.save(dinosaur2);
        dinosaurRepository.save(dinosaur3);

    }
}
