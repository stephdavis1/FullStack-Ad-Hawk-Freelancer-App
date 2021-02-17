package com.example.finalproject.finalproject.controllers;

import com.example.finalproject.finalproject.models.Job;
import com.example.finalproject.finalproject.repositories.FreelancerRepository;
import com.example.finalproject.finalproject.repositories.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class JobController {

    @Autowired
    JobRepository jobRepository;

    @Autowired
    FreelancerRepository freelancerRepository;

    @GetMapping(value = "/jobs")
    public ResponseEntity<List<Job>> getAllJobs(){
        return new ResponseEntity<>(jobRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/jobs/{id}")
    public ResponseEntity getJob(@PathVariable Long id){
        return new ResponseEntity(jobRepository.findById(id), HttpStatus.OK);
    }
}
