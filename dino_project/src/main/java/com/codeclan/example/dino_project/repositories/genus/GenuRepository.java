package com.codeclan.example.dino_project.repositories.genus;


import com.codeclan.example.dino_project.models.Genus;
import com.codeclan.example.dino_project.projections.EmbedGenus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedGenus.class)
public interface GenuRepository extends JpaRepository<Genus, Long>, GenuRepositoryCustom {

}
