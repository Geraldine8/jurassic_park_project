package com.codeclan.example.dino_project.projections;

import com.codeclan.example.dino_project.models.Dinosaur;
import com.codeclan.example.dino_project.models.Paddock;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name= "embedDinosaur", types = Paddock.class)
public interface EmbedDinosaur {
    long getId();
    String getName();
    List<Dinosaur> getDinosaurs();
}
