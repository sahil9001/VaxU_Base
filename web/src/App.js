import React from "react";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Index from "./Components/Index/Index";
import Login from "./Components/Login/Login";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Index />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
