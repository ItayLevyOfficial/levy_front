import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import routes from "./routes";
import { InstagramLogin } from "./instagramLogin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={routes.instagramLogin} component={InstagramLogin} />
      </Switch>
    </Router>
  );
}

export default App;
