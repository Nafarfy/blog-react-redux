import * as React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { isLogin } from "../utils/isLogin";

interface Props extends RouteProps {
  component: React.ComponentType<RouteProps>;
}

export const PrivateRoute = ({ component: Component, ...rest }: Props) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
