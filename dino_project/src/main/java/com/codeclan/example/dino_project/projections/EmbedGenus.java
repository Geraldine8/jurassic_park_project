package com.codeclan.example.dino_project.projections;

import com.codeclan.example.dino_project.models.Dinosaur;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name= "embedGenus", types = Dinosaur.class)
public interface EmbedGenus {
    String getGenus();
    String getType();
}
