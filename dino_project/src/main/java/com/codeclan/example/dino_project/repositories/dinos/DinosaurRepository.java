package com.codeclan.example.dino_project.repositories.dinos;

import com.codeclan.example.dino_project.models.Dinosaur;
import com.codeclan.example.dino_project.projections.EmbedPaddock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedPaddock.class)
public interface DinosaurRepository extends JpaRepository<Dinosaur, Long>, DinosaurRepositoryCustom {
}
