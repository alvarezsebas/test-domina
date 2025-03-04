# Test Domina

Este proyecto es una aplicación de gestión de tareas con autenticación de usuarios, basada en una arquitectura de microservicios para dar solución al test propuesto por Domina. 

## 📁 Estructura del Proyecto

El proyecto está dividido en dos carpetas principales:

- **backend/**: Contiene los microservicios de autenticación (`user-services`) y gestión de tareas (`task-services`).
- **frontend/**: Contiene la aplicación en React para la interacción del usuario.

## Tecnologías utilizadas

### Backend
- Node.js con Express
- MongoDB para almacenamiento de datos
- JWT para autenticación


### Frontend
- React con Hooks y Context API
- CSS para estilos modernos
- Fetch API para comunicación con los microservicios

## ⚙️ Instalación y configuración

### Backend
1. Navega a la carpeta `backend`:
   ```
   cd backend
   ```
2. Navega a la carpeta `user-services`
```
   cd user-services
   ```
3. Instala dependencias:
   ```
   npm install
   ```
4. Inicia los microservicios:
   ```
   node index.js
   ```
5. En otra terminal navega a la carpeta `backend`:
   ```
   cd backend
   ```
6. Navega a la carpeta `task-services`
```
   cd task-services
   ```
7. Instala dependencias:
   ```
   npm install
   ```
8. Inicia los microservicios:
   ```
   node index.js


### Frontend
1. Navega a la carpeta `frontend-text-domina`:
   ```
   cd frontend-test-domina
   ```
2. Instala dependencias:
   ```
   npm install
   ```
3. Inicia la aplicación:
   ```
   npm start
   ```

## 📌 Funcionalidades

### 🛠 Backend (Microservicios)
✅ Registro y autenticación de usuarios  
✅ Creación, edición y eliminación de tareas  
✅ Protección de rutas con JWT  

### 🎨 Frontend
✅ Inicio de sesión y registro de usuarios  
✅ CRUD de tareas (Crear, Leer, Actualizar, Eliminar)  
✅ Diseño moderno y responsivo  

## 📌 API Endpoints

### UserAuth Service
- `POST /auth/register` - Registrar usuario
- `POST /auth/login` - Iniciar sesión

### Task Service
- `GET /tasks` - Obtener tareas del usuario autenticado
- `POST /tasks` - Crear una nueva tarea
- `PUT /tasks/:id` - Actualizar una tarea
- `DELETE /tasks/:id` - Eliminar una tarea

## 📜 Licencia

Este proyecto está bajo la licencia MIT. ¡Siéntete libre de contribuir y mejorarlo! 🚀
