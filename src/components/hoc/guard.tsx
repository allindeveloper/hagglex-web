
import React, { FC } from 'react';
import { Route, RouteProps } from 'react-router-dom';

interface GuardRouteProps extends Omit<RouteProps, 'component'> {
  component: React.ElementType;
}

const GuardRoute: FC<GuardRouteProps> = ({ component: Component, ...args }) => {
 
  return (
    <Route
      {...args}
      render={(props) => <Component {...props} /> 
      }
    />
  );
};
export default GuardRoute;
