"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var services = require("./todo.service");
var todoRoutes = express_1.Router();
exports.todoRoutes = todoRoutes;
var getTodos = function (req, res) {
    return res.send(services
        .getTodos()
        .map(function (todo) { return todo.name; })
        .join(", "));
};
todoRoutes.get("/", getTodos);
