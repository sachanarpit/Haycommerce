import { Route, Switch } from "react-router-dom";

export const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>

        <Route exact path="/products">
          <h1>Product Page</h1>
        </Route>

        <Route>
          <h1>Page not found</h1>
        </Route>
      </Switch>
    </>
  );
};
