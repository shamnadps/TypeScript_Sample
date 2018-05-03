"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var todo_routes_1 = require("./todo.routes");
var app = express();
app.use("/todos", todo_routes_1.todoRoutes);
app.listen(4000, function () { return console.log("Example app listening on port 4000!"); });
