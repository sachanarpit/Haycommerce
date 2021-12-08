import { Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <h1>Home</h1>
        </Route>

        <Route exact path="/products">
          <Navbar />
          <h1>Product Page</h1>
        </Route>

        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>

        <Route>
          <h1>Page not found</h1>
        </Route>
      </Switch>
    </>
  );
};
