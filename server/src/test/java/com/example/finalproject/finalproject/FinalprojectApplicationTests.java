package com.example.finalproject.finalproject;

import com.example.finalproject.finalproject.models.Freelancer;
import com.example.finalproject.finalproject.models.FreelancerType;
import com.example.finalproject.finalproject.models.Job;
import com.example.finalproject.finalproject.repositories.FreelancerRepository;
import com.example.finalproject.finalproject.repositories.JobRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.List;

@SpringBootTest
class FinalprojectApplicationTests {

	@Autowired
	FreelancerRepository freelancerRepository;

	@Autowired
	JobRepository jobRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void createAndSaveFreelancerAndJobs(){

		Freelancer bob = new Freelancer("Bob","bob123@fakemail.com", "Robert123", FreelancerType.SKILLSET1);
		freelancerRepository.save(bob);


		Job web = new Job("Front-End developer", "create an app for freelancers to search for work", 500, true,
				"JS, HTML, CSS", bob);
		jobRepository.save(web);
	}


}
