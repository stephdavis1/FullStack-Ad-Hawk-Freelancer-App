import './App.css';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import Job from "./components/Joblists/Job";
import useFetchJobs from './components/Joblists/useFetchJobs';

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const {jobs, loading, error} = useFetchJobs(params, page)

  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing.</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
    </Container>
  );
}

export default App;
