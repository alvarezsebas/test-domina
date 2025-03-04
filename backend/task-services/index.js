const app = require("./app");

// Puerto del servidor
const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
    console.log(`Task Service corriendo en el puerto ${PORT}`);
});
