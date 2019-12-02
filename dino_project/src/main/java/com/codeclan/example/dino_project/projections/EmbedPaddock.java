package com.codeclan.example.dino_project.projections;

import com.codeclan.example.dino_project.models.Dinosaur;
import com.codeclan.example.dino_project.models.Genus;
import org.springframework.data.rest.core.config.Projection;

@Projection(name= "embedPaddock", types = Dinosaur.class)
public interface EmbedPaddock {
    long getId();
    String getStomachLevel();
    Genus getGenus();
}
