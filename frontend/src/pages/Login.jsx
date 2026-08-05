/*
===================================================
File Name : Login.jsx
Purpose   : Displays the User Login Page
Project   : CyberShield360
Created By: Aniket Fuke
===================================================
*/

// Login Component
// This component shows the login page.
function Login() {

  return (

    // Main container
    <div className="login-container">

      {/* Project Logo / Title */}
      <h1>🛡️ CyberShield360</h1>

      {/* Page Heading */}
      <h2>Welcome Back</h2>

      {/* Small Description */}
      <p>Please login to continue</p>

      {/* -------------------------------
          Email Input Field
         ------------------------------- */}
      <input
        type="email"
        placeholder="Enter your Email"
      />

      <br /><br />

      {/* -------------------------------
          Password Input Field
         ------------------------------- */}
      <input
        type="password"
        placeholder="Enter your Password"
      />

      <br /><br />

      {/* Login Button */}
      <button
      onClick={() => {
        alert("Welcome to CyberShield360!");
        }}>
          Login
          </button>

      <br /><br />

      {/* Register Link */}
      <p>
        Don't have an account?
        <a href="#"> Register</a>
      </p>

    </div>

  );
}

// Export Login Component
export default Login;