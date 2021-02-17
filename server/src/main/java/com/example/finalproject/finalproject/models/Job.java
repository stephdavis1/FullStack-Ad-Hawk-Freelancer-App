package com.example.finalproject.finalproject.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name = "jobs")
public class Job {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String title;

    @Column
    private String description;

    @Column
    private int rate;

    @Column
    private Boolean accepted;

    @Column
    private String skills;

    @ManyToOne
    @JoinColumn(name = "freelancer_id", nullable = false)
    @JsonIgnoreProperties({"jobs"})
    private Freelancer freelancer;

    public Job(String title, String description, int rate, Boolean accepted, String skills, Freelancer freelancer) {
        this.title = title;
        this.description = description;
        this.rate = rate;
        this.accepted = accepted;
        this.skills = skills;
        this.freelancer = freelancer;
    }

    public Job() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getRate() {
        return rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }

    public Boolean getAccepted() {
        return accepted;
    }

    public void setAccepted(Boolean accepted) {
        this.accepted = accepted;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    public Freelancer getFreelancer() {
        return freelancer;
    }

    public void setFreelancer(Freelancer freelancer) {
        this.freelancer = freelancer;
    }
}
