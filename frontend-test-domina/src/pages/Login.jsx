import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext"; // Asegúrate de importar correctamente tu contexto
import { FaUser, FaLock } from "react-icons/fa";
import "../styles/Login.css"; // Importación del CSS

export const Login = () => {
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {

        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(formData);
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-box">
                    <input 
                        type="text" 
                        name="email"
                        placeholder="Usuario" 
                        value={formData.email}
                        onChange={handleChange} 
                        required 
                    />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input 
                        type="password" 
                        name="password"
                        placeholder="Contraseña" 
                        value={formData.password}
                        onChange={handleChange} 
                        required 
                    />
                    <FaLock className="icon" />
                </div>
                <button type="submit">Iniciar sesión</button>
                <div className="register-link">
                    <p>No tienes cuenta? <a href="#" onClick={() => navigate('/register')}>Registrarse</a></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
