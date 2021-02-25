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

        Job job1 = new Job("Niall's Old Job", "Looking for a replacement instructor to be a sound guy, and teach a bunch of G22 smart-ass, sarcastic, misfits", "Glasgow","https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/codeclan-logo/original.png", true);


        Job job2 = new Job("Senior Backend Engineer", "Are you interested in working in healthcare and medical sectors for a disruptive start-up that is backed by VCs, won several major UK research grants and collaborates with leading Universities?\n" +
                "\n" +
                "Vamstar is a data science powered B2B healthcare marketplace that helps suppliers find the most relevant healthcare contracting leads using Artificial Intelligence (AI). We apply real-time machine learning forecasts, analyse buyers and competitor behaviours, and perform analytics at scale.\n" +
                "\n" +
                "We are looking for a full-time UK-only remote Sr. Backend Developer who has extensive experience in writing backend APIs and services and wants to solve big technical challenges at a scale that will reshape the healthcare industry for generations. You will get the opportunity to be involved in architecture, data modeling, design and implementation of microservices, and highly scalable backend development. The successful candidates will be working in a team of highly skilled and experienced developers, data scientists, and CTO. The candidates MUST be based in the UK and Authorised to work in the UK.\n" +
                "\n", "Berlin", "https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/codeclan-logo/original.png", true);


        Job job3 = new Job("Experienced Front End Developer", "mtc. are currently looking to recruit front end web developers. You will join our existing team of front end developers and work on a diverse range of web sites each with differing client needs. Your role will involve installing and configuring our a variety of ecommerce and CMS systems and bringing our design team's vision for our customers to life. You should have a sound knowledge and a desire to keep up to date with the rapidly evolving world of modern web standards. We are looking for candidates who are able to help us continue our push into the challenges and complexities of the modern web and beyond. Required skills are a sound knowledge of HTML5, CSS3 and JavaScript / Vue.js or similar. Work with headless CMS systems is highly desire-able as is the ability to read and edit basic PHP. We need front end developers with a keen visual eye that can deliver high-tech solutions but also pixel perfect websites.", "Dundee", "https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/codeclan-logo/original.png", true);


        Job job4 = new Job("Full Stack Developer", "This is a true “Full-Stack” role, so we envisage a UI which allows users to specify and view the data they are seeking, the UI partners with a back end which extracts the data from multiple sources. The Full Stack Engineer will be responsible for the development of the pathways along which the data will travel.\n" +
                "\n" +
                "We’re looking for a self-motivated person who will develop and improve an already existing web application. Main language used to build it is JavaScript, so this language is a requirement for this position. Experience with AWS is also preferred. The ideal candidate will not necessarily be an expert in full-stack web development but will have a good understanding of how it works and will be able to develop and understand previously written code.\n" +
                "\n" +
                "Experience or knowledge in IT administration is also highly preferable. You would be responsible for managing office’s network infrastructure, handling hardware for new hires, helping staff with technical problems etc.\n" +
                "\n", "Madrid", "https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/codeclan-logo/original.png", true);
        jobRepository.save(job1);
        jobRepository.save(job2);
        jobRepository.save(job3);
        jobRepository.save(job4);

        List<JobPayload> foundJobs = apiClient.getAllJobs();

        List<Job> jobObjects = foundJobs.stream()
                .map(s -> new Job(s.getTitle(), s.getDescription(), s.getLocation(), s.getCompany_logo(), false))
                .collect(Collectors.toList());

        jobRepository.saveAll(jobObjects);

    }
}
