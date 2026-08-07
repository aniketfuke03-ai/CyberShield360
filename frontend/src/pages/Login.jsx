/*
===================================================
File Name : Login.jsx
Purpose   : User Login Page
Project   : CyberShield360
Created By: Aniket Fuke
===================================================
*/

// Import React Hook
import { useState } from "react";

// Import Eye Icons
import { FaEye, FaEyeSlash } from "react-icons/fa";

// Login Component
function Login() {

    // Store password visibility
    const [showPassword, setShowPassword] = useState(false);

    return (

        // Main Login Container
        <div className="login-container">

            {/* Project Title */}
            <h1>🛡️ CyberShield360</h1>

            {/* Welcome Heading */}
            <h2>Welcome Back</h2>

            {/* Small Description */}
            <p>Please login to continue</p>

            {/* Email Input Field */}
            <input
                type="email"
                placeholder="Enter your Email"
            />

            <br /><br />

            {/* Password Box */}
            <div className="password-box">

                {/* Password Input */}
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your Password"
                />

                {/* Eye Icon */}
                <span
                    className="eye-icon"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {/* Change Eye Icon */}
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>

            </div>

            <br /><br />

            {/* Login Button */}
            <button
                onClick={() => {
                    alert("Welcome to CyberShield360!");
                }}
            >
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