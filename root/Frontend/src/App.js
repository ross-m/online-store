import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from "./Components/home.js"
import MensTops from "./Components/mens_tops"
import { ProvideAuth } from "./State Management/auth.js"


export default function App() {
  return (
    <ProvideAuth>
      <Router>
          <Switch>
            <Route path="/Mens/Tops">
              <MensTops />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </ProvideAuth>
  );
}
