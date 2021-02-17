package com.example.finalproject.finalproject.controllers;

import com.example.finalproject.finalproject.models.Freelancer;
import com.example.finalproject.finalproject.repositories.FreelancerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FreelanceController {

    @Autowired
    FreelancerRepository freelancerRepository;

    @GetMapping(value = "/freelancer/{id}")
    public ResponseEntity<Freelancer> getOneFreelancer(@PathVariable Long id){
        return new ResponseEntity(freelancerRepository.findById(id), HttpStatus.OK);
    }
}
