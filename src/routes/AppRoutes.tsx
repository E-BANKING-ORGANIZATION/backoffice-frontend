import { Route, Routes } from "react-router-dom";
import { routes } from "./AllRoutes";
import { PrivateRoute } from "./PrivateRoute";

export const AppRoutes = () => {
  return (
    <Routes>
      {routes.map((route) => {
        const Component = route.component;
        return route.isPublic ? (
          <Route key={route.key} path={route.path} element={<Component />} />
        ) : route.Children != null ? (
          <Route
            key={route.key}
            path={route.path}
            element={
              <PrivateRoute
                roleHandler={route.role}
                component={<Component></Component>}
              ></PrivateRoute>
            }
          >
            {route.Children.map((child) => {
              const ChildComponent = child.component;
              return (
                <Route
                  key={route.key}
                  path={child.path}
                  element={
                    <PrivateRoute
                      roleHandler={route.role}
                      component={<ChildComponent></ChildComponent>}
                    ></PrivateRoute>
                  }
                ></Route>
              );
            })}
          </Route>
        ) : (
          <Route
            key={route.key}
            path={route.path}
            element={
              <PrivateRoute
                roleHandler={route.role}
                component={<Component></Component>}
              ></PrivateRoute>
            }
          />
        );
      })}
      {/* <Route
        path={PATHS.UNAUTHORIZED_BASE_PATH}
        element={<UnauthorizedPage />}
      /> */}
    </Routes>
  );
};
