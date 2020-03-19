import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function instagramLogin(){
  console.log('logined');
}

function App() {
  const responseInstagram = (response) => {
    console.log(response);
  }
  return (
    <Router>
      <Switch>
        <button onClick={instagramLogin}>
          login with instagram
        </button>
      </Switch>
    </Router>
  );
}

export default App;
