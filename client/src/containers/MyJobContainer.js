import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Job from '../components/Joblists/Job';
import useAcceptedJobs from '../components/Joblists/useAcceptedJobs';
import SearchForm from '../components/Joblists/SearchForm';

function MyJobContainer() {
    const [params, setParams] = useState({ description: "", location: "" })
    const { jobs } = useAcceptedJobs(params)
    function handleParamChange(e) {
        const param = e.target.name
        const value = e.target.value
        setParams(prevParams => {
            return { ...prevParams, [param]: value }
        })
    }

    return (
        <Container className="my-4">
            <h1 className="mb-4">Accepted Jobs</h1>
            <SearchForm params={params} onParamChange={handleParamChange} />
            {jobs.map(job => {
                return <Job key={job.id} job={job} />
            })}
        </Container>
    );
};

export default MyJobContainer;
