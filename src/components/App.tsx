import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import routes from "./routes";
import { InstagramLogin } from './instagramLogin';
import { InstagramRedirect } from "./InstagramRedirect";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={routes.instagramLogin} component={InstagramLogin} />
        <Route path={routes.instagramRedirectURI} component={InstagramRedirect}/>
      </Switch>
    </Router>
  );
}

export default App;
