import React from 'react';
import Job from './Job.js';

const JobList = ({jobs}) => {

    if(jobs.length === 0){
        return (<p>Loading...</p>)
    }

    const jobsNodes = jobs.map((job, index) => {
        return (
            <li key={index} className="component-item">
                <div className="component">
                    <Job job={job} />
                </div>
            </li>
        )
    })

    return (
        <ul className="component-list">
            {jobsNodes}
        </ul>
    )
}

export default JobList;