const Job = ({job}) => {

    return (

        <div>
            <h3>{job.title}</h3>
            <p>Description: {job.description}</p>
            <p>Rate: {job.rate}</p>
            <p>Accepted: {job.accepted}</p>
            <p>Skills: {job.skills}</p>
        </div>
    )
};

export default Job;