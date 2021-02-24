package com.example.finalproject.finalproject.components;

import com.example.finalproject.finalproject.client.Client;
import com.example.finalproject.finalproject.models.Freelancer;
import com.example.finalproject.finalproject.models.FreelancerType;
import com.example.finalproject.finalproject.models.Job;
import com.example.finalproject.finalproject.models.JobPayload;
import com.example.finalproject.finalproject.repositories.FreelancerRepository;
import com.example.finalproject.finalproject.repositories.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    FreelancerRepository freelancerRepository;

    @Autowired
    JobRepository jobRepository;

    @Autowired
    Client apiClient;

    public DataLoader(){

    }

    public void run(ApplicationArguments args){

        // Freelancer

        Freelancer bob = new Freelancer("Bob","bob123@fakemail.com", "Robert123", FreelancerType.SKILLSET1);
        freelancerRepository.save(bob);

        // Jobs

        Job web = new Job("Photoshop Graphic Designer", "Looking for photoshop madlad", "Glasgow",".png", false);
        jobRepository.save(web);

        List<JobPayload> foundJobs = apiClient.getAllJobs();

        List<Job> jobObjects = foundJobs.stream()
                .map(s -> new Job(s.getTitle(), s.getDescription(), s.getLocation(), s.getCompany_logo(), false))
                .collect(Collectors.toList());

        jobRepository.saveAll(jobObjects);

    }
}
