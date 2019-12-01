package com.codeclan.example.dino_project.models;

import javax.persistence.*;

@Entity
@Table(name = "genera")
public class Genus {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "genus")
    private String genus;
    @Column(name = "type")
    private String type;

    public Genus(String genus, String type) {
        this.genus = genus;
        this.type = type;
    }

    public Genus(){

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGenus() {
        return genus;
    }

    public void setGenus(String genus) {
        this.genus = genus;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
