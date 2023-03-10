import React from "react";
import TodoList from "./TodoList";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div>
        {/* @ts-ignore */}
        <TodoList />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
