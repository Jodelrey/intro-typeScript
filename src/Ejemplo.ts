type Todo = {
  status: "pending" | "completed";
  id: number;
  text: string;
  comentarios?: Comment[];
};

type User = {
  nombre: string;
};

type Comment = {
  text: string;
  usuario: User;
};

const agregarComentario = (usuario: User, text: string, todo: Todo) => {
  if (todo.comentarios) {
    todo.comentarios.push({ text: text, usuario: usuario });
  } else {
    todo.comentarios = [{ text: text, usuario: usuario }];
  }
};

const agregarTodo = (text: string, todos: Todo[]) => {
  todos.push({ id: todos.length, text: text, status: "pending" });
};

const completeTodo = (id: number, todos: Todo[]) => {
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.status = "completed";
  }
};

const deleteTodo = (id: number, todos: Todo[]) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex) {
    todos.splice(todoIndex, 1);
  }
};

const todos: Todo[] = [];
agregarTodo("Hacer compras", todos);
completeTodo(0, todos);

export default {};
