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

        Job web = new Job("Photoshop Graphic Designer", "Looking for photoshop madlad", "Glasgow, Scotland", "Remote","https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbVdhIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a2bd45ce3d759fa8f190678e8b8f5467059a6629/mwl-logo-square.png", true);
        jobRepository.save(web);

        Job job = new Job("Backend developer", "Looking for something to do backend development", "Berlin, Germany", "Remote", ".jpeg", true);
        jobRepository.save(job);

        List<JobPayload> foundJobs = apiClient.getAllJobs();

        List<Job> jobObjects = foundJobs.stream()
                .map(s -> new Job(s.getTitle(), s.getDescription(), s.getLocation(), s.getType(), s.getCompany_logo(), false))
                .collect(Collectors.toList());

        jobRepository.saveAll(jobObjects);

    }
}
