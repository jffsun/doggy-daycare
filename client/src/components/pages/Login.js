import React, { useState } from "react";
// import { validateEmail, validateText } from '../utils/helpers'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

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
  
  const handleFormSubmit = (e) => {

    e.preventDefault();

    // if (!validateEmail(email)) {
    //   setErrorMessage("Please enter a valid email.");
    //   return;
    // }
    // if (!validatePassword(message)) {
    //   setErrorMessage(`Please enter a password`);
    //   return;
    // }

    setEmail("");
    setPassword("");
    alert("You are now Logged In");
  };
  return (
    <div className="container">
      <form className="form title" >
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