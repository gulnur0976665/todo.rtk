"use client";
import { FC } from "react";
import scss from "./TodoList.module.scss";
import { useDeleteTodoMutation, useGetTodosQuery } from "@/redux/api/todo";

const TodoList: FC = () => {
  const { data, isLoading } = useGetTodosQuery();
  const [deleteTodoMutation] = useDeleteTodoMutation();
  return (
    <section className={scss.TodoList}>
      <div className="container">
        <div className={scss.content}>
          {data?.map((el) => (
            <div key={el._id} className="">
              <h1>{el.title}</h1>
              <img src={el.img} alt="image" />
              <button onClick={() => deleteTodoMutation(el._id!)}>
                delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TodoList;
