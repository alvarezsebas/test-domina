import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/AuthServices";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) setUser(JSON.parse(storedUser));
    }, []);

    const login = async (credentials) => {
        const response = await authService.login(credentials);

        if (response.token) {
            localStorage.setItem("user", JSON.stringify(response));
            setUser(response);
            navigate("/tasks");
        } else {
            console.error("No se recibió un token.");
        }
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
