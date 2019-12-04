package com.codeclan.example.dino_project;

import com.codeclan.example.dino_project.models.Genus;
import com.codeclan.example.dino_project.models.Paddock;
import com.codeclan.example.dino_project.repositories.dinos.DinosaurRepository;
import com.codeclan.example.dino_project.repositories.genus.GenuRepository;
import com.codeclan.example.dino_project.repositories.paddocks.PaddockRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
class DinosaurProjectApplicationTests {

	@Autowired
	DinosaurRepository dinosaurRepository;

	@Autowired
	GenuRepository genuRepository;

	@Autowired
	PaddockRepository paddockRepository;


	@Test
	void contextLoads(){
	}

	@Test
	public void createDinosaurs(){
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
	}

	@Test
	public void createPaddocks(){
		Paddock paddock1 = new Paddock("Happy Paddock");//carnivore
		Paddock paddock2 = new Paddock("Dirty Paddock");
		paddockRepository.save(paddock1);
		paddockRepository.save(paddock2);
	}

}
