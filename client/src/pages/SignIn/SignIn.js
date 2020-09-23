import React, { useState } from "react";
import { Link } from "react-router-dom";
import './SignIn.css';
import { auth } from '../../components/Firebase';
import bg1 from '../../images/bg1.jpg';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  //Password Reset =================================================
  const [resetEmail, setResetEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [resetError, setResetError] = useState(null);

  const onResetChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "resetEmail") {
      setResetEmail(value);
    }
  };

  const sendResetEmail = event => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => { setEmailHasBeenSent(false) }, 4000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };

  //===================================================================

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
    <>
    <div style={{backgroundImage: `url(${bg1})`}} className="signInContainer">

      <form className="siForm">
        <h1 style={{ paddingBottom: '10px', marginLeft: '30px', color: 'black' }}>Sign In</h1>
        {error !== null && <div>{error}</div>}
        <div className="form-group">
          <input type="email" id="userEmail" name="userEmail" placeholder="Email" value={email} onChange={(event) => onChangeHandler(event)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

        </div>
        <div className="form-group">

          <input type="password" id="userPassword" name="userPassword" placeholder="Password" className="form-control" value={password} onChange={(event) => onChangeHandler(event)} id="exampleInputPassword1" />
        </div>

        <button type="submit" style={{marginLeft: '55px'}} className="btn btn-success" onClick={(event) => { signInWithEmailAndPasswordHandler(event, email, password) }}>Sign In</button>
        <br />
        <br />
        {/* <p style={{paddingTop: '10px'}}>Dont have an Account? | <Link to="/signUp">Sign Up here!</Link></p> */}

        {/* <Link to="/passwordReset">Forgot Password?</Link> */}
        <p data-toggle="modal" data-target="#staticBackdrop" style={{ color: 'blue', textDecoration: 'underline', cursor: 'pointer', marginLeft: '30px' }}>Forgot Password?</p>

      </form>
      </div>

      {/* <!-- Modal for password reset ============================================--> */}
      <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Reset Password</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">

                <form action="">
                  {emailHasBeenSent && (
                    <div style={{marginLeft: '60px'}}>
                      <p style={{color: 'green'}}>An email has been sent to you!</p>
                    </div>
                  )}
                  {resetError !== null && (
                    <div>
                      {resetError}
                    </div>
                  )}
                  <label htmlFor="resetEmail">
                    Email:
          </label>
                  <input
                    type="email"
                    name="resetEmail"
                    id="resetEmail"
                    value={resetEmail}
                    placeholder="Input your email"
                    onChange={onResetChangeHandler}
                  />
                  <button
                    onClick={event => {
                      sendResetEmail(event);
                    }}
                  >
                    Send me a reset link
          </button>
                </form>

              </div>

            <div className="modal-footer mx-auto">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              {/* <button type="button" className="btn btn-primary">Understood</button> */}
            </div>

          </div>
        </div>
      </div>

    </>


  );
};
export default SignIn;