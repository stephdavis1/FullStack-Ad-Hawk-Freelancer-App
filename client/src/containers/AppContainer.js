import { useState, useEffect} from 'react';
import JobDisplay from "../components/Jobs/JobDisplay";

const AppContainer = () => {

    const [jobs, setJobs] = useState([])
    const [freeLancers, setFreelancers] = useState([])

    const getJobs = () => {
        console.log("Bringing in list of jobs...");
        fetch(`http://localhost:8080/jobs`)
        .then(res => res.json())
        .then(data => setJobs(data))
    }

    const getFreelancer = () => {
        console.log("Freelancer loading...");
        fetch(`http://localhost:8080/freelancer`)
        .then(res => res.json())
        .then(data => setFreelancers(data))
    }

    useEffect(() => {
        getJobs()
    }, []);

    useEffect(() => {
        getFreelancer()
    }, []);

    return(
        <div>
            <h2>Lists of Jobs</h2>
            <JobDisplay jobs={jobs}/>
        </div>
    )
}


export default AppContainer;