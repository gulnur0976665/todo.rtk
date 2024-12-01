"use client";
import { FC } from "react";
import scss from "./TodoList.module.scss";
import { useDeleteTodoMutation, useGetTodosQuery } from "@/redux/api/todo";
import Image from "next/image";

const TodoList: FC = () => {
  const { data } = useGetTodosQuery();
  const [deleteTodoMutation] = useDeleteTodoMutation();
  return (
    <section className={scss.TodoList}>
      <div className="container">
        <div className={scss.content}>
          {data?.map((el) => (
            <div key={el._id} className="">
              <h1>{el.title}</h1>
              {el.img && (
                <Image src={el.img} alt="image" width={300} height={300} />
              )}
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
