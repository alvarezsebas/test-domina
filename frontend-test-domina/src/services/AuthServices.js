const API_URL = "http://localhost:4000/api/auth";

const login = async (userData) => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  const data = await res.json();
  

  if (res.ok) {
    localStorage.setItem("token", data.token);
    return data;
  }
  return {};
};


const register = async (userData) => {
    try {
        const response = await fetch(`${API_URL}/register`, { // Asegúrate de usar el puerto correcto
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error("Error en el registro");
        }

        return await response.json();
    } catch (error) {
        console.error("Error en el registro:", error);
        throw error;
    }
};


export default { login, register };

