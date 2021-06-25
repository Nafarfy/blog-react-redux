import { Route, Redirect, RouteProps } from "react-router-dom";
import { isLogin } from "../utils/isLogin";

interface Props extends RouteProps {
  component: React.ComponentType<RouteProps>;
  restricted: boolean;
}

export const PublicRoute = ({ component: Component, ...rest }: Props) => {
  const { restricted } = rest;

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() && restricted ? (
          <Redirect to="/" exact />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
