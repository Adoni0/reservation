import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn/SignIn';
import Admin from '../pages/Admin';

export default function Application() {
    const user = null;
    return (
        user ? 
        <Admin />
        :
        <Router>
          <Route exact path="/login" component={SignIn}/>       
          {/* <SignIn path="/" /> */}
          {/* <PasswordReset path = "passwordReset" /> */}
        </Router>
    )
}
