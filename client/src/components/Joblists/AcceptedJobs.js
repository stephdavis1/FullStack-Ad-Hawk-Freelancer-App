import React from 'react';

const baseURL = 'http://localhost:8080/jobs/';

const AcceptedJobs = {
    getJobs() {
        return fetch(baseURL + "myjobs")
            .then(res => res.json());
    },

    addJob(job) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(job),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json());
    },

    updateJob(job) {
        return fetch(baseURL + job.id, {
            method: 'PUT',
            body: JSON.stringify(job),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json());
    },

    deleteJob(id) {
        return fetch(baseURL + id, {
            method: 'DELETE'
        });
    }
};

export default AcceptedJobs;