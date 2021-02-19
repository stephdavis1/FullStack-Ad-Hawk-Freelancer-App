import './App.css';

import { Container } from 'react-bootstrap';
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import useFetchJobs from './components/Joblists/useFetchJobs';

function App() {
  const {jobs, loading, error} = useFetchJobs()

  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error. Try Refreshing.</h1>}
      <h1>{jobs.length}</h1>
    </Container>
  );
}

export default App;
