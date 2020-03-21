import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import React from "react";
import routes from "./routes";
import { InstagramLogin } from './instagramLogin';

const InstagramRedirect: React.FC = () => {
  const code = (new URLSearchParams(useLocation().search)).get('code');
  console.log(code);
  return (
    <div>
      TODO
    </div>
  )
}

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
