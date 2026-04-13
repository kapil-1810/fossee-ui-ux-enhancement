import React, { useState } from "react";

function Register({ goToLogin }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const password = e.target.password.value;
    const confirm = e.target.confirm.value;

    if (password !== confirm) {
      setMessage("Passwords do not match");
      return;
    }

    setMessage("Registered successfully!");
  };

  return (
    <div className="card">
      <h3>Register</h3>

      {message && <div className="message">{message}</div>}

      <form onSubmit={handleSubmit}>

        <h4>Account Details</h4>

        <label>Username</label>
        <input required />

        <label>Email</label>
        <input type="email" required />

        <label>Password</label>
        <input name="password" type="password" required />
        <small>Password must be at least 6 characters</small>

        <label>Confirm Password</label>
        <input name="confirm" type="password" required />

        <h4>Personal Info</h4>

        <label>Title</label>
        <select>
          <option>Prof.</option>
          <option>Dr.</option>
          <option>Mr.</option>
          <option>Ms.</option>
        </select>

        <label>First Name</label>
        <input required />

        <label>Last Name</label>
        <input required />

        <label>Phone Number</label>
        <input required />

        <h4>Professional</h4>

        <label>Institute</label>
        <input required />

        <label>Department</label>
        <select>
          <option>Computer Science</option>
          <option>Mechanical</option>
          <option>Electrical</option>
        </select>

        <h4>Location</h4>

        <label>City</label>
        <input required />

        <label>State</label>
        <input required />

        <label>How did you hear about us?</label>
        <select>
          <option>FOSSEE website</option>
          <option>Friends</option>
          <option>College</option>
        </select>

        <button type="submit">Register</button>
      </form>

      <p className="link" onClick={goToLogin}>
        Already have an account? Login
      </p>
    </div>
  );
}

export default Register;