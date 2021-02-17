package com.example.finalproject.finalproject.repositories;

import com.example.finalproject.finalproject.models.Freelancer;
import com.example.finalproject.finalproject.models.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobRepository extends JpaRepository<Job, Long> {

    // List jobs that are accepted as True
    List<Job> findByAcceptedTrue();

    // List jobs that are accepted as False
    List<Job> findByAcceptedFalse();


}
