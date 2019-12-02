package com.codeclan.example.dino_project.models;

import org.hibernate.annotations.Cascade;
import org.springframework.data.rest.core.annotation.RestResource;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="dinosaurs")
public class Dinosaur implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "stomach_level")
    private int stomachLevel;
    @Cascade(org.hibernate.annotations.CascadeType.SAVE_UPDATE)
    @ManyToOne
    @JoinColumn(name = "paddock_id", nullable = true)
    private Paddock paddock;

    @OneToOne
    @JoinColumn(name = "genus_id", nullable = false)
    private Genus genus;


    public Dinosaur(int stomachLevel, Genus genus, Paddock paddock) {
        this.stomachLevel = stomachLevel;
        this.genus = genus;
        this.paddock = paddock;
    }

    public Dinosaur(){

    }

    public int getStomachLevel() {
        return stomachLevel;
    }

    public void setStomachLevel(int stomachLevel) {
        this.stomachLevel = stomachLevel;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Paddock getPaddock() {
        return this.paddock;
    }

    public void setPaddock(Paddock paddock) {
        this.paddock = paddock;
    }

    public Genus getGenus() {
        return this.genus;
    }

    public void setGenus(Genus genus) {
        this.genus = genus;
    }

    public void rampage() {
        this.paddock = null;
    }
}
