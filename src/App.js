import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Logo from "./components/Logo";
import Orders from "./components/Orders";
import { getSubdomain } from "./utils/subdomainHelper";

const App = () => {
  const subdomain = getSubdomain();

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        {/* Navbar */}
        <nav className="bg-blue-600 text-white py-4 px-6 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <Logo subdomain={subdomain} />
            <div className="flex gap-4">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <Link to="/orders" className="hover:underline">
                Orders
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container mx-auto py-10 px-4">
          <Switch>
            <Route path="/" exact>
              <div className="text-center">
                <h1 className="text-3xl font-bold">Welcome to the <span className="text-blue-600">{subdomain}</span> subdomain!</h1>
                <p className="text-gray-700 mt-2">Manage your orders efficiently.</p>
              </div>
            </Route>
            <Route path="/orders">
              <Orders subdomain={subdomain} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
