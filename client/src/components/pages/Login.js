import React, { useState } from "react";
import { LOGIN_USER } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
// import { validateEmail, validateText } from '../utils/helpers'
import Auth from '../../utils/auth';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.id;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "password") {
      setPassword(inputValue);
    }
  };
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await login({
        variables: { email: email, password: password },
      });

      Auth.login(data.login.token);
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
          onChange={handleInputChange}
        ></input>
        <p>
          {errorMessage && (
            <span className="error-text">{errorMessage}</span>
          )}
        </p>
        <input
          data-testid="text-box"
          value={password}
          id="password"
          placeholder="Password"
          type="password"
          onChange={handleInputChange}
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
          value="Submit"
          onClick={handleFormSubmit}
        ></input>
      </form>
    </div>
  );

}
export default Login;