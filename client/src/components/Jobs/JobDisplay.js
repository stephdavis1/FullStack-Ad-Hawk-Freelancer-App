import Job from "../Jobs/Job";

const JobDisplay = ({ jobs }) => {
    const jobList = jobs.map((job) => {

        return(
            <li id = "job-list">
                <Job job={job} 
                    key ={job.id}/>
            </li>
        )
    });

    return(
        <div>
            <h2>These are the Jobs on offer</h2>
            <ul id = "job-display">
                {jobList}
            </ul>
        </div>
    )
};

export default JobDisplay;