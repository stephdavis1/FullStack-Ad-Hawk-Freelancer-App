import { useState, useEffect} from 'react';
import JobDisplay from "../components/Jobs/JobDisplay";

const AppContainer = ({jobs}) => {

    const [job, setJob] = useState([])
    const [freeLancer, setFreelancer] = useState([])

    const getJobs = () => {
        console.log("Bringing in list of jobs...");
        fetch(`http://localhost:8080/jobs`)
        .then(res => res.json())
        .then(data => setJob(data))
    }

    const getFreelancer = () => {
        console.log("Freelancer loading...");
        fetch(`http://localhost:8080/freelancer`)
        .then(res => res.json())
        .then(data => setJob(data))
    }

    useEffect(() => {
        getJobs()
    }, []);

    useEffect(() => {
        getFreelancer()
    }, []);

    return(
        <div>
            <h2>App Container</h2>
            <JobDisplay jobs={jobs}/>
        </div>
    )
}


export default AppContainer;