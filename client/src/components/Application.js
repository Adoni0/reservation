import React, { useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp';
import PasswordReset from '../pages/PasswordReset';
import Admin from '../pages/Admin';
import { UserContext } from '../providers/UserProvider';

export default function Application() {
    const user = useContext(UserContext);;
    return (
        user ? 
        <Admin />
        :
        <Router>
          {/* <Route exact path="/login" component={SignIn}/>        */}

          <SignIn path="/signIn" />
          {/* <SignUp path="/signUp"/>
          <PasswordReset path="/passwordReset"/> */}
        </Router>
    )
}
