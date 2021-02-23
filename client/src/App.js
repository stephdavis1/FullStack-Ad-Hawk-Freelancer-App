import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar/NavBar';
import Homepage from './components/Homepage/Homepage';
import JobContainer from './containers/JobContainer';
import Footer from './containers/Footer/Footer';

<<<<<<< HEAD
=======

>>>>>>> develop
function App() {

  return (
    <Router>
      <Container>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/alljobs" component={JobContainer} />
          <Route path="/myjobs" component={JobContainer} />
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
