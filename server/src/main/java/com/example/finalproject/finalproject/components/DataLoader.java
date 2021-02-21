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

        Job web = new Job("Photoshop","Freelance","Looking for someone to help with photoshop","02/20/2021","Glasgow, Scotland","Wizzle", "http://wizzle",
                "Email resume to 1234@fakemail.com", ".png", freelancer1);


        Job e = new Job("E commerce Website - Online Service Marketplace","Freelance","We are looking for Online Service Marketplace connecting the Buyers and Sellers of a geographical Region.",
                "02/12/2021", "Edinburgh, Scotland","Webhelp",
                "https://webhelp.com/","Send an email", ".png", freelancer1);

        jobRepository.save(web);
        jobRepository.save(e);
    }
}
