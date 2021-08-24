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
        <Route path="/">
          <Home />
        </Route>
        <br></br>
        <Route path="/:id*">
          <Products />
        </Route>
      </Router>
    </ProvideAuth>
  );
}
