import Job from './Job';

const MyJobList = ({jobs, updateJob, deleteJob}) => {
    const jobNodes = jobs.map(job => {
        return <Job 
        key={job._id}
        job={job}
        updateJob={updateJob}
        deleteJob={deleteJob} />
    });

    if (!jobs){
        return null
    }

    return (
        <>
        {jobNodes}
        </>
    )
}

export default MyJobList;