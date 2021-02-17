package com.example.finalproject.finalproject.repositories;

import com.example.finalproject.finalproject.models.Freelancer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FreelancerRepository extends JpaRepository<Freelancer, Long> {

}
