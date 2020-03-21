import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import routes from "./routes";
import { Button, Grid } from "@material-ui/core";
import constants from './constants';
import outdent from 'outdent';

function redirectToInstagram() {
  const url = window.location.href;
  window.location.href = outdent.string(`
    https://api.instagram.com/oauth/authorize
    ?client_id=${constants.appID}
    &redirect_uri=${url.substring(0, url.lastIndexOf('/'))}${routes.instagramRedirectURI}
    &scope=user_profile
    &response_type=code`);
}

const InstagramLogin: React.FC = () => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
      spacing={0}
    >
      <Button size="large" variant="outlined" onClick={redirectToInstagram}>
        Login with instagram
      </Button>
    </Grid>
  );
};

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
