package com.example.finalproject.finalproject.client;

import com.example.finalproject.finalproject.models.JobPayload;

import java.util.Arrays;
import java.util.List;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class Client {
    public List<JobPayload> getAllJobs(){
        String url = "https://jobs.github.com/positions.json/";

        RestTemplate restTemplate = new RestTemplate();

        JobPayload[] jobsFromApi = restTemplate.getForObject(url, JobPayload[].class);

        return Arrays.asList(jobsFromApi);
    }
}
