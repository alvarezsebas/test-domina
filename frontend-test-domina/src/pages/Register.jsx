import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/AuthServices";
import '../styles/Login.css'
import { FaUser, FaLock } from "react-icons/fa";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleRegister = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password
    };
    const success = await authService.register(userData);
    if (success) navigate("/login");
  };

  return (
    <div className="wrapper">
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <div className="input-box">
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
        />
         <FaUser className="icon" />
        </div>
        <div className="input-box">
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
         <FaLock className="icon" />
        </div>
        
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};


export default Register;
