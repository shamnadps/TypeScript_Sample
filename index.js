"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var arr = [];
var todosHandler = function (req, res) {
    return res.send(arr.map(function (todo) { return todo.name; }).join(", "));
};
app.get("/todos", todosHandler);
app.listen(4000, function () { return console.log("Example app listening on port 4000!"); });
