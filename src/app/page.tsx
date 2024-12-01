import TodoAdd from "@/components/TodoAdd";
import TodoList from "@/components/TodoList";
import React from "react";

const page = () => {
  return (
    <div>
      <TodoAdd />
      <TodoList />
    </div>
  );
};

export default page;
