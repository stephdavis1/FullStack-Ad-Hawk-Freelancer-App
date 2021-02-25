import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar/NavBar';
import Homepage from './components/Homepage/Homepage';
import JobContainer from './containers/JobContainer';
import MyJobContainer from'./containers/MyJobContainer';
import Footer from './containers/Footer/Footer';

function App() {

  return (
    <Router>
      <Container>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/alljobs" component={JobContainer} />
          <Route path="/myjobs" component={MyJobContainer} />
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
