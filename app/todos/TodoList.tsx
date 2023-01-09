async function fetchTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();
  return todos;
}
import Link from "next/link";
import React from "react";
import { Todo } from "../../typings";
async function TodoList() {
  const todos = await fetchTodos();
  return (
    <>
      {todos.map((todo) => (
        <p>
          <Link href={`/todos/${todo.id}`}>Todo:{todo.id}</Link>
        </p>
      ))}
    </>
  );
}

export default TodoList;
