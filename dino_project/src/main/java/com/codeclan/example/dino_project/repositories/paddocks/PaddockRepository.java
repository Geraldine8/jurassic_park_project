package com.codeclan.example.dino_project.repositories.paddocks;

import com.codeclan.example.dino_project.models.Paddock;
import com.codeclan.example.dino_project.projections.EmbedDinosaur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource(excerptProjection = EmbedDinosaur.class)
public interface PaddockRepository extends JpaRepository<Paddock, Long>, PaddockRepositoryCustom {
}
