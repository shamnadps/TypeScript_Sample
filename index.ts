import { Router, Request, Response } from "express";

const app: Router = Router();

export interface Todo {
  name: string;
  done: boolean;
}

const arr: Todo[] = [];

app.get("todos", (req, res) => res.send(arr.map(todo => todo.name).join(", ")));
