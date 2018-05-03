"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1.Router();
var arr = [];
app.get("todos", function (req, res) { return res.send(arr.map(function (todo) { return todo.name; }).join(", ")); });
