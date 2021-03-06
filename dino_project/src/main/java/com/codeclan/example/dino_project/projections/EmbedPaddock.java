package com.codeclan.example.dino_project.projections;

import com.codeclan.example.dino_project.models.Dinosaur;
import com.codeclan.example.dino_project.models.Genus;
import com.codeclan.example.dino_project.models.Paddock;
import org.springframework.data.rest.core.config.Projection;

@Projection(name= "embedPaddock", types = Dinosaur.class)
public interface EmbedPaddock {
    long getId();
    String getStomachLevel();
    Paddock getPaddock();
    Genus getGenus();
}
