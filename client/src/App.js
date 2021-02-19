import './App.css';
import AppContainer from "./containers/AppContainer";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Homepage from "./components/Homepage/Homepage";

function App() {
  
  return (
    <Router>
      <NavBar/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/jobs" component={AppContainer} />
        </Switch>
    </Router>
  );
}

export default App;

{/* <AppContainer /> */}
