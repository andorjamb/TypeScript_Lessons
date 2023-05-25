"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo =
  exports.updateTodo =
  exports.getTodos =
  exports.createTodo =
    void 0;
const todo_1 = __importDefault(require("../models/todo"));
//const TODOS: Todo[] = [];
const createTodo = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const data = req.body;
      console.log("Data", data);
      let todos = yield todo_1.default.create(data);
      return res
        .status(200)
        .json({ message: "Todo created sucessfully", data: todos });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  });
exports.createTodo = createTodo;
const getTodos = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      let todos = yield todo_1.default.find({});
      return res.status(200).json({ message: "All todos", data: todos });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  });
exports.getTodos = getTodos;
const updateTodo = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { id } = req.params;
      let todos = yield todo_1.default.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      return res
        .status(200)
        .json({ message: "Todo updated succesfully", data: todos });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  });
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const { id } = req.params;
      let todos = yield todo_1.default.findByIdAndDelete(id);
      return res
        .status(200)
        .json({ message: "Todo successfully deleted:", todos });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
    /*  const todoIndex = TODOS.findIndex((todo) => todoId === todo.id);
     if (todoIndex < 0) {
         throw new Error('todo not found');
 
     }
     else {
         TODOS.splice(todoIndex, 1);
         res.status(200).json({ message: 'Item deleted' })
     } */
  });
exports.deleteTodo = deleteTodo;
