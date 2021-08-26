import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from "./Components/home.js"
import Cart from "./Components/cart.js"
import Products from "./Components/productDisplay"
import PromotionWheel from "./Components/promotionWheel.js"
import { ProvideAuth } from "./State Management/auth.js"


export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
            <br/>
            <PromotionWheel/>
          </Route>
          <Route exact path="/cart">
            <Home/>
            <br/>
            <Cart/>
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
