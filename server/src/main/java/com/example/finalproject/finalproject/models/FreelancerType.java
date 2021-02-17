package com.example.finalproject.finalproject.models;

public enum FreelancerType {

    SKILLSET1("Graphic Designer"),
    SKILLSET2("Front End Developer"),
    SKILLSET3("Back End Developer"),
    SKILLSET4("Web Developer");

    private String skills;

    FreelancerType(String skills){
        this.skills = skills;
    }

    public String getSkills(){
        return skills;
    }
}
