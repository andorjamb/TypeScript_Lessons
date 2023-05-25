"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_1 = require("../controller/todo");
const router = (0, express_1.Router)();
router.get("/");
router.post("/", todo_1.createTodo);
router.patch("/:");
router.delete("/:");
exports.default = router;
