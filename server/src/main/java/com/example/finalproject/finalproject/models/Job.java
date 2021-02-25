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

    @Lob
    private String description;

    @Column
    private String location;

    @Column
    private String company_logo;

    @Column
    private Boolean accepted;

    @ManyToOne
    @JoinColumn(name = "freelancer_id", nullable = true)
    @JsonIgnoreProperties({"jobs"})
    private Freelancer freelancer;

    public Job(String title, String description, String location, String company_logo, Boolean accepted) {
        this.title = title;
        this.description = description;
        this.location = location;
        this.company_logo = company_logo;
        this.accepted = accepted;
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

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getCompany_logo() {
        return company_logo;
    }

    public void setCompany_logo(String company_logo) {
        this.company_logo = company_logo;
    }

    public Boolean getAccepted() {
        return accepted;
    }

    public void setAccepted(Boolean accepted) {
        this.accepted = accepted;
    }
}
