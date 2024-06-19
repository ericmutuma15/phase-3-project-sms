import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './form.css'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username,
        password,
        mode : 'cors'
        
      });
      history("/dashboard");
      console.log("User logged in:", response.data);
      alert("Login successful!");
      
    } catch (error) {
      console.error("Login failed:", error.response.data);
      alert("Login failed!");
      
    }
  };
  /** const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/register', { username, password});
      console.log('User registered successfully:', response.data);
      alert('registered successfully!')
      history.push('/dashboard');
    } catch (error) {
      console.error('Registration failed:', error.response.data);
      alert('registration failed!!')
      history.push('/register')
    }
  }; */
  const handleClick = () => {
    history("/register");
  };

  return (
    <div className="container">
      <form className="form">
        <h2>Login</h2>
        <div className="input">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="btn">
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleClick}>Register</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
