import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateFakeJWT } from "../utils/auth";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (email === "tusharkarwade03@gmail.com" && password === "Tushar@123") {
            const token = generateFakeJWT(email);
            localStorage.setItem("token", token); // Store JWT in localStorage
            setMessage("Login successful!");
            setTimeout(() => navigate("/"), 1000);
        } else {
            setMessage("Invalid credentials!");
        }
    };

    return (
        <div className="page-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;
