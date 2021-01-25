import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "./_helpers/history";
import routes from "./routes";

const App = () => (
  <div>
    <Router history={history}>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            exact={route.exact}
            path={route.path}
            component={route.layout(route.component)}
          />
        ))}
        <Redirect from="/" to="/sign-in" />
      </Switch>
    </Router>
  </div>
);

export default App;

