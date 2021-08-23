import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from "./Components/home.js"
import MensTops from "./Components/productDisplay"
import { ProvideAuth } from "./State Management/auth.js"


export default function App() {
  return (
    <ProvideAuth>
      <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/:id*">
              <MensTops />
            </Route>
          </Switch>
      </Router>
    </ProvideAuth>
  );
}
