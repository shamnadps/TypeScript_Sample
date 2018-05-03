import { Express, Request, Response } from "express";
import * as express from "express";
import { todoRoutes } from "./todo.routes";
const app: Express = express();

app.use("/todos", todoRoutes);

app.listen(4000, () => console.log("Example app listening on port 4000!"));
