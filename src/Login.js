import React, { useState } from "react";

function Login({ goToRegister }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Invalid username/password");
  };

  return (
    <div className="card">
      <h3>Login</h3>

      {message && <div className="error">{message}</div>}

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="email" required />

        <label>Password</label>
        <input type="password" required />

        <button type="submit">Sign In</button>
      </form>

      <div className="links">
        <p onClick={goToRegister}>New around here? Sign up</p>
        <p className="forgot">Forgot password?</p>
      </div>
    </div>
  );
}

export default Login;