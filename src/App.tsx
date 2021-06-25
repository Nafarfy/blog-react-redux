import { BrowserRouter, Switch } from "react-router-dom";
import * as pages from "./pages";
import { PrivateRoute, PublicRoute } from "./components";
import { Layout } from "./layouts/Layout";
import "./App.css";
import React from "react";

const routes: {
  id: number;
  isPrivate: boolean;
  path: string;
  component: React.FunctionComponent;
  params: { restricted: boolean };
}[] = [
  {
    id: 1,
    isPrivate: false,
    path: "/",
    component: pages.Main,
    params: {
      restricted: false,
    },
  },
  {
    id: 2,
    isPrivate: false,
    path: "/login",
    component: pages.Login,
    params: {
      restricted: true,
    },
  },
  {
    id: 3,
    isPrivate: false,
    path: "/register",
    component: pages.Register,
    params: {
      restricted: true,
    },
  },
  {
    id: 4,
    isPrivate: true,
    path: "/profile",
    component: pages.Profile,
    params: {
      restricted: true,
    },
  },
  {
    id: 5,
    isPrivate: true,
    path: "/create",
    component: pages.CreatePost,
    params: {
      restricted: true,
    },
  },
];

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {routes.map((route, i) =>
            route.isPrivate ? (
              <PrivateRoute
                key={route.id}
                component={route.component}
                path={route.path}
                {...route.params}
                exact
              />
            ) : (
              <PublicRoute
                key={route.id}
                component={route.component}
                path={route.path}
                {...route.params}
                exact
              />
            )
          )}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
