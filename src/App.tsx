import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

function App() {
  return (
    <Router>
      <Switch>
        <Route component={SignIn} path='/login'/>
        <Route component={SignUp} path='/sign-up'/>
      </Switch>
    </Router>
  );
}

export default App;
