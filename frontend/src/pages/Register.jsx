/*
===================================================
File Name : Register.jsx
Purpose   : User Registration Page
Project   : CyberShield360
Created By: Aniket Fuke
===================================================
*/

// Import React Hook
import { useState } from "react";

// Register Component
function Register() {

  // Store Full Name
  const [name, setName] = useState("");

  // Store Email
  const [email, setEmail] = useState("");

  // Store Password
  const [password, setPassword] = useState("");

  // Store Confirm Password
  const [confirmPassword, setConfirmPassword] = useState("");

  return (

    // Main Register Container
    <div className="login-container">

      {/* Project Title */}
      <h1>🛡️ CyberShield360</h1>

      {/* Page Heading */}
      <h2>Create Account</h2>

      {/* Description */}
      <p>Create your new account</p>

      {/* Full Name */}
      <input
        type="text"
        placeholder="Enter Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      {/* Email */}
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      {/* Password */}
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      {/* Confirm Password */}
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <br /><br />

     {/* Register Button */}
     <button
     onClick={() => {
        // Check Password Match
        if(password !== confirmPassword){

      alert("Passwords do not match!");

      return;
     }

     // Success Message
     alert("Registration Successful!");
     }}
     >
        Register
        </button>

      <br /><br />

      {/* Login Link */}
      <p>
        Already have an account?
        <a href="#"> Login</a>
      </p>

    </div>

  );

}

// Export Component
export default Register;