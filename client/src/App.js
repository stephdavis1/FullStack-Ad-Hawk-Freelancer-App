import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar/NavBar';
import Homepage from './components/homepage/Homepage';
import JobContainer from './containers/JobContainer';


function App() {

  return (
    <Router>
      <Container>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/jobs" component={JobContainer} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
