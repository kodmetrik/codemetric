import React from "react";

import AuthUserContext from "./context";
import { withFirebase } from "../Firebase/context";

/**
 * Verilen component'e `authUser` state'ine erişim hakkı verir
 * @param {React.Component} Component React componenti
 */
const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: JSON.parse(localStorage.getItem('authUser'))
      };
    }
    componentDidMount() {
      // TIP: Giriş yapıldı mı kontorlü
      // WARN: Listener component unmount olduğunda kaldırlmazsa performans kaybına neden olur.
      this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
        if(authUser){
          localStorage.setItem('authUser',JSON.stringify(authUser))
          this.setState({ authUser });
          return
        }
        localStorage.setItem('authUser', JSON.stringify(authUser))
        this.setState({authUser: null})
      });
    }
    componentWillUnmount() {
      // Performans kaybını engellemek için listenerı kapatıyoruz
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Provider value={this.state.authUser}>
          <Component {...this.props} />
        </AuthUserContext.Provider>
      );
    }
  }

  return withFirebase(WithAuthentication);
};

export default withAuthentication;