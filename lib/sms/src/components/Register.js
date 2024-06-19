import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './form.css'

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const history = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:5000/register", {
        username,
        password,
        role,
      });
      console.log("User registered:", response.data.message);
      alert('Registration successful')
      history('/dashboard')
    } catch (error) {
      console.error("Registration failed:", error.response.data);
      alert("Registration failed");
      history('/registration')
    }
  };
  const handleClick = () => {
    history("/login");
  };
  return (
    <div className="container">
      <div className="form">
        <h2>Register</h2>
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
          <input
            type="text"
            placeholder="Role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>
        <div className="btn">
          <button onClick={handleRegister}>Register</button>
          <button onClick={handleClick}>Log In</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
