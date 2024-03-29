import { RequestHandler } from "express";
import Todo, { TodoModel } from "../models/todo";

//const TODOS: Todo[] = [];

export const createTodo: RequestHandler = async (req, res, next) => {
  try {
    const data: TodoModel = req.body;
    console.log("Data", data);
    let todos = await Todo.create(data);
    return res
      .status(200)
      .json({ message: "Todo created sucessfully", data: todos });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTodos: RequestHandler = async (req, res, next) => {
  try {
    let todos = await Todo.find({});
    return res.status(200).json({ message: "All todos", data: todos });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTodo: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    let todos = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    return res
      .status(200)
      .json({ message: "Todo updated succesfully", data: todos });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTodo: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    let todos = await Todo.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ message: "Todo successfully deleted:", todos });
  } catch (error: any) {
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
};
