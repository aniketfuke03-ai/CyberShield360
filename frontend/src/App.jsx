/*
===================================================
File Name : App.jsx
Purpose   : Main Component
Project   : CyberShield360
Created By: Aniket Fuke
===================================================
*/

// Import React Hook
import { useState } from "react";

// Import CSS
import "./App.css";

// Import Pages
import Login from "./pages/Login";
import Register from "./pages/Register";

// Main Component
function App() {

  // Store Current Page
  const [page, setPage] = useState("login");

  return (

    <>
      {/* Show Login Page */}
      {page === "login" ? (

        <>
          <Login />

          <p style={{ textAlign: "center", color: "white" }}>
            Don't have an account?

            <button
              onClick={() => setPage("register")}
            >
              Register
            </button>

          </p>
        </>

      ) : (

        <>
          <Register />

          <p style={{ textAlign: "center", color: "white" }}>
            Already have an account?

            <button
              onClick={() => setPage("login")}
            >
              Login
            </button>

          </p>
        </>

      )}

    </>

  );

}

// Export Component
export default App;