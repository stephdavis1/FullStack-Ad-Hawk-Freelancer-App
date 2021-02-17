package com.example.finalproject.finalproject.repositories;

import com.example.finalproject.finalproject.models.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JobRepository extends JpaRepository<Job, Long> {

}
