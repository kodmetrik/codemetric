import React from 'react';
import LoginPage from './views/LoginPage';
import Dashboard from './views/Dashboard'
import { BrowserRouter as Router,Route} from 'react-router-dom'
import { withAuth } from './Session'
import * as ROUTES from './constants/routes';
import GraphsPage from './views/Graphs';
import PrivateRoute from './utils/PrivateRoute'
class App extends React.Component {
  render(){
    return (
        <Router>
          <Route exact path={ROUTES.LANDING} component={LoginPage} />
          <PrivateRoute exact path={ROUTES.DASHBOARD} component={Dashboard}/>
          <PrivateRoute path={ROUTES.GRAPHS} component={GraphsPage}  exact />
        </Router>
    );
  }
}

export default withAuth(App);
