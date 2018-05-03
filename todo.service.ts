import { Todo } from "./todo.interface";
const arr: Todo[] = [
  { name: "setup typescript", done: true },
  { name: "build and startup", done: true },
  { name: "arrange into diff files", done: true }
];

const getTodos = () => {
  return arr;
};

export { getTodos };
