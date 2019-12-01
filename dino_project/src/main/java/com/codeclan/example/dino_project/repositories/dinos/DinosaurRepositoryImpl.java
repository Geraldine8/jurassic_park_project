package com.codeclan.example.dino_project.repositories.dinos;


import com.codeclan.example.dino_project.models.Dinosaur;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class DinosaurRepositoryImpl implements DinosaurRepositoryCustom {

    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Dinosaur> getAllDinosaur(){
        List<Dinosaur> dinosaurs = null;
        Session session = entityManager.unwrap(Session.class);
        try {
            Criteria cr = session.createCriteria(Dinosaur.class);
            dinosaurs = cr.list();
        } catch (HibernateException e) {
            e.printStackTrace();
        } finally {
            session.close();
        }
        return dinosaurs;
    }


}
