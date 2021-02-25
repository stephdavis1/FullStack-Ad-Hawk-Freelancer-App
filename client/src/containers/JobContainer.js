import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Job from '../components/Joblists/Job';
import AcceptedJobs from '../components/Joblists/AcceptedJobs';
import useFetchJobs from '../components/Joblists/useFetchJobs';
import JobsPagination from '../components/Joblists/JobsPagination';
import SearchForm from '../components/Joblists/SearchForm';

function JobContainer() {

  const [params, setParams] = useState({description: "", location: ""})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)

  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    console.log(param);
    console.log(value);
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

  const updateJob = updatedJob => {
    AcceptedJobs.updateJob(updatedJob);

    const updatedJobIndex = jobs.findIndex(job => job.id === updateJob.id);
    const updatedJobs = [...jobs];
    updatedJobs[updatedJobIndex] = updatedJob;
    // setMyJobs(updatedJobs);
};

  return (
    <Container className="my-4">
      <h1 className="mb-4">Job Search</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing.</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} updateJob={updateJob}/>
      })}
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  );

};

export default JobContainer;