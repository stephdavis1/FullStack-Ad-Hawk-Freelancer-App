import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import JobList from '../components/Jobs/JobList';
import JobDetail from '../components/Jobs/JobDetail';
import Request from '../helpers/request';

const JobContainer = () => {
    const [jobs, setjobs] = useState([]);

    const requestAll = function(){
        const request = new Request();
        const jobPromise = request.get('/api/jobs')

        Promise.all([jobPromise])
        .then((data) => {
            setjobs(data[0]);
        })
    }

    useEffect(()=>{
        requestAll()
    }, [])

    const findJobById = function(id){
        return jobs.find((job) => {
            return job.id === parseInt(id);
        })
    }

    const handleDelete = function(id){
        const request = new Request();
        const url = "/api/jobs/" + id
        request.delete(url)
        .then(() => window.location = "/jobs")
    }

    if(!jobs){
        return null
    }
    return(
        <>
        <switch>

            <Route exact path="/jobs/:id" render={(props) =>{
                const id = props.match.params.id;
                const job = findJobById(id);
                return <JobDetail job={job}
                onDelete={handleDelete} />

            }}/>

            <Route render={() => {
                return <JobList jobs={jobs}/>
            }} />

        </switch>
        </>
    )
}

export default JobContainer;