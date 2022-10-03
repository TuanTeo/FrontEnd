import React from "react";
import { Route, Switch, Router, Redirect } from "react-router-dom";
import * as page from "./pages";
import history from "./history";
import localStorage from "./localStorage";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedLogin from "./ProtectedLogin";
const Routes = () => {
  const user = localStorage.getToken();

  return (
    <div className="content">
      <Router history={history}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              if (!user) {
                return <Redirect to="/login" />;
              } else {
                return <Redirect to="/account" />;
              }
            }}
          />
          <ProtectedLogin
            isAuth={user ? true : false}
            path="/login"
            component={page.LoginPage}
          />
          <ProtectedRoute
            isAuth={user ? true : false}
            path="/account"
            component={page.AccountPage}
          />
          <Route path="/regester" component={page.Regester} />
          <Route path="/forget-password" component={page.ForgetPassword} />
          <Route path="/reset-password" component={page.ResetPassword} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
