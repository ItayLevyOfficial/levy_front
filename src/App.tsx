import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignIn from './SignIn'
import SignUp from './SignUp'

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
// ddd
export default App;
