import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from "./Components/home.js"
import {ProvideAuth, useAuth} from "./State Management/auth.js"


export default function App() {
  return (
    <ProvideAuth>
      <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </ProvideAuth>
  );
}
