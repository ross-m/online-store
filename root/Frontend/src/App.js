import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from "./Components/home.js"
import Products from "./Components/productDisplay"
import PromotionWheel from "./Components/promotionWheel.js"
import { ProvideAuth } from "./State Management/auth.js"


export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route exact path="/">
            
            <PromotionWheel/>
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
