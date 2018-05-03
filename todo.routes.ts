import { Express, Router, Request, Response } from "express";
import { Todo } from "./todo.interface";
import * as services from "./todo.service";

const todoRoutes: Router = Router();

const getTodos = (req: Request, res: Response) =>
  res.send(
    services
      .getTodos()
      .map(todo => todo.name)
      .join(", ")
  );

todoRoutes.get("/", getTodos);

export { todoRoutes };
