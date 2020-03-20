import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import routes from "./routes";
import { Container, Button, Grid } from "@material-ui/core"

const SignIn: React.FC = () => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Button>Login with instagram</Button>
    </Grid>
  )
}

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path={routes.instagram_login}
          component={SignIn}
        />
      </Switch>
    </Router>
  );
}

export default App;
