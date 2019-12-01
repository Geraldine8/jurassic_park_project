package com.codeclan.example.dino_project.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="dinosaurs")
public class Dinosaur implements Serializable {


    @Column(name = "stomach_level")
    private int stomach_level;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnoreProperties("dinosaurs")
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @ManyToOne
    @JoinColumn(name = "paddock_id", nullable = true)
    private Paddock paddock;

    @JsonIgnoreProperties("genara")
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @ManyToOne
    @JoinColumn(name = "genus_id", nullable = false)
    private Genus genus;



    public Dinosaur(int stomach_level, Genus genus, Paddock paddock) {
        this.stomach_level = stomach_level;
        this.genus = genus;
        this.paddock = paddock;
    }

    public Dinosaur(){

    }

    public int getStomach_level() {
        return stomach_level;
    }

    public void setStomach_level(int stomach_level) {
        this.stomach_level = stomach_level;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Paddock getPaddock() {
        return paddock;
    }

    public void setPaddock(Paddock paddock) {
        this.paddock = paddock;
    }

    public Genus getGenus() {
        return genus;
    }

    public void setGenus(Genus genus) {
        this.genus = genus;
    }

    public void rampage() {
        this.paddock = null;
    }
}
