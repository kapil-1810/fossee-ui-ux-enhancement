import React, { useState } from "react";
import "./App.css";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [page, setPage] = useState("login");

  return (
    <>
      <div className="navbar">
        <h2>FOSSEE Workshops</h2>
        <div className="nav-links">
          <span>Home</span>
          <span>Workshop Statistics</span>
        </div>
      </div>

      <div className="main">
        {page === "login" ? (
          <Login goToRegister={() => setPage("register")} />
        ) : (
          <Register goToLogin={() => setPage("login")} />
        )}
      </div>
    </>
  );
}

export default App;