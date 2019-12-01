package com.codeclan.example.dino_project.repositories.parks;

import com.codeclan.example.dino_project.models.Park;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface ParkRepository extends JpaRepository<Park, Long>, ParkRepositoryCustom {
}
