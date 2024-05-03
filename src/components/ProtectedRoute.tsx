import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface ProtectedRouteProps extends RouteProps {
  isLoggedIn: boolean;
  redirectTo: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isLoggedIn,
  redirectTo,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          <Route {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: redirectTo,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
