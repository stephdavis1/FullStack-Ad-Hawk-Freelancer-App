import React from 'react';
import {Link} from 'react-router-dom';

const Job = ({job}) => {

    if(!job){
        return <p>Loading...</p>
    }

    const url = "/jobs/" + job.id;

    return(
        <>
        <Link to = {url} className="name">
        {job.title}
        </Link>
        <p>Description: {job.description}</p>
        <p>Rate: {job.rate}</p>
        <p>Accepted: {job.accepted}</p>
        <p>Skills: {job.skills}</p>
        </>
    )
}

export default Job;