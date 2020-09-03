import React, { useState } from "react";
import { Link } from "react-router-dom";
import './SignIn.css';
import { auth } from '../../components/Firebase';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password).catch(error => {
      setError("Error signing in with password and email!");
      console.error("Error signing in with password and email", error);
    });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === 'userEmail') {
      setEmail(value);
    }
    else if (name === 'userPassword') {
      setPassword(value);
    }
  };

  return (
    
    <div className="signInContainer">

      <form className="siForm">
        <h1 style={{paddingBottom: '10px'}}>Sign In</h1>
        <div class="form-group">
          <input type="email" name="userEmail" placeholder="Email" value={email} onChange={(event) => onChangeHandler(event)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        
        </div>
        <div class="form-group">
        
          <input type="password" name="userPassword" placeholder="Password" class="form-control" value={password} onChange={(event) => onChangeHandler(event)} id="exampleInputPassword1" />
        </div>
       
        <button type="submit" class="btn btn-success" onClick={(event) => { signInWithEmailAndPasswordHandler(event, email, password) }}>Sign In</button>

        <p style={{paddingTop: '10px'}}>Dont have an Account? | <Link to="/signUp">Sign Up here!</Link></p>
        
        <Link to="/passwordReset">Forgot Password?</Link>
      </form>

    </div>
    

  );
};
export default SignIn;