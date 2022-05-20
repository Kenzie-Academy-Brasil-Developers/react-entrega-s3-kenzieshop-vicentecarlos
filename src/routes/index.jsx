import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import { Login } from "../pages/Login";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/cart">
      <Cart />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
  </Switch>
);

export default Routes;
