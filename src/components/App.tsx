import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
import InstagramLogin from 'react-instagram-login';

const responseInstagram = (response) => {
  console.log(response);
}

const Login: React.FC = () => {
  return (
    <InstagramLogin
      clientId="498277677742228"
      buttonText="Login"
      onSuccess={responseInstagram}
      onFailure={responseInstagram}
      scope="user_profile"
      redirectUri="https://itaylevyofficial.github.io/levy_front/"
      style={{justifyContent: 'center'}}
    />
  )
}

function App() {
  return (
    <Router>
      <Switch>
        <Route
          path={routes.instagram_login}
          component={Login}
        />
      </Switch>
    </Router>
  );
}

export default App;
