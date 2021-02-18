import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import JobContainer from './JobContainer';

const MainContainer = () => {

    return (
        <Router>
            <>
            <Switch>
                <Route path="/jobs" component={JobContainer} />
            </Switch>
            </>
        </Router>
    )
}

export default MainContainer;