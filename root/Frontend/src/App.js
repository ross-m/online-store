import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from "./Components/home.js"
import Products from "./Components/productDisplay"
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
            <Home />
            <br/>
            <Products />
          </Route>
        </Switch>
      </Router>
    </ProvideAuth>
  );
}
