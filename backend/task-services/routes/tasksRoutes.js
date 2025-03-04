const express = require("express");
const { getTasks, createTask, updateTask, deleteTask } = require("../controller/tasksController");
const authMiddleware = require("../middlewares/userAuthMiddlewares");

const router = express.Router();

router.get("/", authMiddleware, getTasks);
router.post("/", authMiddleware, createTask);
router.put("/:id", authMiddleware, updateTask);
router.delete("/:id", authMiddleware, deleteTask);

module.exports = router;

