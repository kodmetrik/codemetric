import React from 'react';
import {withAuth} from '../Session'
import AuthAuthUserContext from '../Session/context'
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <AuthAuthUserContext.Consumer>
      {
        authUser => (
          <Route {...rest} render={(props) => (
            authUser !== null
              ? <Component {...props} />
              : <Redirect to="/" />
            )} 
          />
        )
      }
  </AuthAuthUserContext.Consumer>
  );
};


export default withAuth(PrivateRoute) ;