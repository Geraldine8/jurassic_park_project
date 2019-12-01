package com.codeclan.example.dino_project.controller;



import com.codeclan.example.dino_project.repositories.genus.GenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/genera")
public class GenusController {
    @Autowired
    GenuRepository genuRepository;
}
