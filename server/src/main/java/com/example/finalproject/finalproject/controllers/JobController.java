package com.example.finalproject.finalproject.controllers;

import com.example.finalproject.finalproject.models.Job;
import com.example.finalproject.finalproject.repositories.FreelancerRepository;
import com.example.finalproject.finalproject.repositories.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class JobController {

    @Autowired
    JobRepository jobRepository;

    @Autowired
    FreelancerRepository freelancerRepository;


    // Show All Jobs

    @GetMapping(value = "/jobs")
    public ResponseEntity<List<Job>> getAllJobs(){
        return new ResponseEntity<>(jobRepository.findAll(), HttpStatus.OK);
    }

    // Show all Jobs by ID.
    @GetMapping(value = "/jobs/{id}")
    public ResponseEntity getJob(@PathVariable Long id){
        return new ResponseEntity(jobRepository.findById(id), HttpStatus.OK);
    }

    // CREATE JOB

    @PostMapping(value = "/jobs")
    public ResponseEntity<Job> createJob(@RequestBody Job newJob){
        Job createdJob = jobRepository.save(newJob);
        return new ResponseEntity<>(createdJob, HttpStatus.CREATED);
    }

    // UPDATE JOB

    @PutMapping(value = "/jobs/{id}")
    public ResponseEntity<Job> updateJob(@RequestBody Job job, @PathVariable Long id){
        Job jobToUpdate = jobRepository.findById(id).get();
        jobToUpdate.setTitle(job.getTitle());
        jobToUpdate.setDescription(job.getDescription());
        jobToUpdate.setCreated_at(job.getCreated_at());
        jobToUpdate.setLocation(job.getLocation());
        jobToUpdate.setCompany(job.getCompany());
        jobToUpdate.setCompany_url(job.getCompany_url());
        jobToUpdate.setHow_to_apply(job.getHow_to_apply());
        jobToUpdate.setCompany_logo(job.getCompany_logo());
        jobRepository.save(jobToUpdate);
        return new ResponseEntity<>(jobToUpdate, HttpStatus.OK);
    }

    // DELETE JOB
    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Long> deleteJob(@PathVariable Long id){
        jobRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }

//   // GET ALL JOBS THAT ARE ACCEPTED AS TRUE
//    @GetMapping(value = "/jobs/myjobs")
//    public ResponseEntity<List<Job>> getAcceptedJobs(){
//        return new ResponseEntity(jobRepository.findByAcceptedTrue(), HttpStatus.OK);
//    }
//
//    // GET ALL JOBS THAT ARE ACCEPTED AS FALSE
//    @GetMapping(value = "/jobs/alljobs")
//    public ResponseEntity<List<Job>> getDeclinedJobs(){
//        return new ResponseEntity(jobRepository.findByAcceptedFalse(), HttpStatus.OK);
//    }
}
