package com.example.finalproject.finalproject.components;

import com.example.finalproject.finalproject.models.Freelancer;
import com.example.finalproject.finalproject.models.FreelancerType;
import com.example.finalproject.finalproject.models.Job;
import com.example.finalproject.finalproject.repositories.FreelancerRepository;
import com.example.finalproject.finalproject.repositories.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    FreelancerRepository freelancerRepository;

    @Autowired
    JobRepository jobRepository;

    public DataLoader(){

    }

    public void run(ApplicationArguments args){

        // Freelancer

        Freelancer freelancer1 = new Freelancer("Bob","bob123@fakemail.com", "Robert123", FreelancerType.SKILLSET1);
        freelancerRepository.save(freelancer1);

        // Jobs

        Job job1 = new Job ("Front-End developer", "create an app for freelancers to search for work", 500, true,
                "JS, HTML, CSS", freelancer1);

        Job job2 = new Job("Logo Design", "Create a logo and branding for a car company",240, true,
                "Graphic Design/Photoshop Illustrator", freelancer1);

        Job job3 = new Job("Photography", "Product photography/photo editing for ecommerce website", 130, false,
                "Photographer", freelancer1);

        Job job4 = new Job("Customer Service Advisor", "Inbound/Outbound call centre work for a company", 80, false,
                "Customer Service skills", freelancer1);

        jobRepository.save(job1);
        jobRepository.save(job2);
        jobRepository.save(job3);
        jobRepository.save(job4);
    }
}
