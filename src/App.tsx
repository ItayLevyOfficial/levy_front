import React from 'react';
import SignIn from './SignIn'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <Router>
            <Route component={SignIn} path='/login'/>
        </Router>
    );
}

export default App;
