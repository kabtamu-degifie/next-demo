import React from "react";
import { Todo } from "../../../typings";

async function fetchTodo(todoId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );
  const todos: Todo = await res.json();
  return todos;
}
type TodoPageProps = {
  params: {
    todoId: string;
  };
};
async function TodoPage({ params: { todoId } }: TodoPageProps) {
  const todo = await fetchTodo(todoId);
  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>
        #{todoId}: {todo.title}
      </p>
      <p>Completed:{todo.completed ? "Yes" : "No"}</p>
      <p className="border-t border-black mt-5 text-right">
        By User: {todo.userId}
      </p>
    </div>
  );
}

export default TodoPage;
