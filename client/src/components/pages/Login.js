import React, { useState } from "react";
import { LOGIN_USER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import App from "../../App";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const [login, { error }] = useMutation(LOGIN_USER);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  console.log(email, password)
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await login({
        variables: { email: email, password: password },
      });

      if (!data) {
        setErrorMessage(`lol error`);
        console.log(error);
      }

      Auth.login(data.login.token);

      App.setLoggedIn(true);

    } catch (err) {
      console.log(err);
    }

  };

  return (
    <div className="container">
      <form className="form title" onSubmit={handleFormSubmit}>
        <br />
        <h1>Log In</h1>
        <br />
       
        <input
          data-testid="email"
          className="input"
          value={email}
          id="email"
          type="email"
          placeholder="Email"
          onChange={handleEmail}
        ></input>
        <p>
          {errorMessage && (
            <span className="error-text">{errorMessage}</span>
          )}
        </p>
        <input
          data-testid="text-box"
          value={password}
          className="input"
          id="password"
          placeholder="Password"
          type="password"
          onChange={handlePassword}
        ></input>
        <p>
          {errorMessage && (
            <span className="error-text">{errorMessage}</span>
          )}
        </p>
        <br />
        <input
          data-testid="submitButton"
          type="submit"
          className="Submit btn btn-danger"
          value="Login"
          onClick={handleFormSubmit}
        ></input>
      </form>
      <br />
      <p>Don't Have An Account? <Link to='/signup'><span className='a2'>Register</span></Link></p>
    </div>
  );

}
export default Login;