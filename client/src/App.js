import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import Job from "./components/Joblists/Job";
import useFetchJobs from './components/Joblists/useFetchJobs';
import JobsPagination from './components/Joblists/JobsPagination';
import SearchForm from './components/Joblists/SearchForm';

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const {jobs, loading, error, hasNextPage} = useFetchJobs(params, page)

  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

  return (
    <Container className="my-4">
      <Header />
      <h1 className="mb-4">Job Search</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing.</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
      <Footer />
    </Container>
  );
}

export default App;
