import React from "react";
import { notFound } from "next/navigation";
import { Todo } from "../../../typings";

export const dynamicParams = true;

async function fetchTodo(todoId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    {
      next: {
        revalidate: 60,
      },
    }
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

  if (!todo.id) return notFound();
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

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();

  const slicedTodos = todos.slice(0, 10);

  return slicedTodos.map((todo) => ({
    todoId: todo.id.toString(),
  }));
}
