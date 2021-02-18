import React from 'react';
import Job from "./Job";

const JobDetail = ({job, onDelete}) => {

    if (!job){
        return <p>Loading...</p>
    }

    const handleDelete = () => {
        onDelete(job.id)
    }
    
    return (
        <div className = "component">
            <Job job = {job}/>
        <button onClick={handleDelete}>Delete {job.title}</button>
        </div>
    )
}

export default JobDetail;