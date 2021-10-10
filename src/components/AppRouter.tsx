import { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AuthContext from "../context";
import { adminRoutes, unloggedRoutes, loggedRoutes } from "../routes";

const AppRouter = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  switch (isAuth) {
    case "user":
      return (
        <Switch>
          {loggedRoutes.map((route: any) => (
            <Route component={route.component} path={route.path} />
          ))}
          <Redirect to="/err" />
        </Switch>
      );
    case "admin":
      return (
        <Switch>
          {adminRoutes.map((route: any) => (
            <Route component={route.component} path={route.path} />
          ))}
          <Redirect to="/err" />
        </Switch>
      );
    default:
      return (
        <Switch>
          {unloggedRoutes.map((route: any) => (
            <Route component={route.component} path={route.path} />
          ))}
          <Redirect to="/err" />
        </Switch>
      );
  }
};

export default AppRouter;
