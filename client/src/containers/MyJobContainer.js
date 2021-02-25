import { useState, useEffect } from 'react';
import AcceptedJobs from '../components/Joblists/AcceptedJobs';
import MyJobList from '../components/Joblists/MyJobList';

const MyJobContainer = () => {

    const [myJobs, setMyJobs] = useState([])

    useEffect(() => {
        AcceptedJobs.getJobs()
            .then(jobs => {
                setMyJobs(jobs)
            })
    }, []);

    const updateJob = updatedJob => {
        AcceptedJobs.updateJob(updatedJob);

        const updatedJobIndex = myJobs.findIndex(job => job.id === updateJob.id);
        const updatedJobs = [...myJobs];
        updatedJobs[updatedJobIndex] = updatedJob;
        setMyJobs(updatedJobs);
    };

    const deleteJob = idToDelete => {
        AcceptedJobs.deleteJob(idToDelete);

        setMyJobs(myJobs.filter(job => job.id !== idToDelete));
    };

    return (
        <div>
            <MyJobList jobs={myJobs} updateJob={updateJob} deleteJob={deleteJob} />
            {/* <h1>THIS IS MY JOBS PAGE</h1> */}
        </div>
    )
}

export default MyJobContainer;
