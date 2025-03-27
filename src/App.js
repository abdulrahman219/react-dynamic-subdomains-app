import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Logo from './components/Logo';
import Orders from './components/Orders';
import { getSubdomain } from './utils/subdomainHelper';

const App = () => {
  const subdomain = getSubdomain();

  return (
    <Router>
      <div>
        <Logo subdomain={subdomain} />
        <Switch>
          <Route path="/" exact>
            <h1>Welcome to the {subdomain} subdomain!</h1>
          </Route>
          <Route path="/orders">
            <Orders subdomain={subdomain} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;