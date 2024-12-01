"use client";
import { FC } from "react";
import scss from "./TodoAdd.module.scss";
import { usePostTodoMutation } from "@/redux/api/todo";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUploadFileMutation } from "@/redux/api/upload";

const TodoAdd: FC = () => {
  const [postTodosQuery] = usePostTodoMutation();
  const { register, handleSubmit, reset } = useForm<ITodo>();
  const [uploadFileMutation] = useUploadFileMutation();
  const onSubmit: SubmitHandler<ITodo> = async (data) => {
    const file = data.file![0];
    const formDate = new FormData();
    formDate.append("file", file);
    const { data: responseImage } = await uploadFileMutation(formDate);
    await postTodosQuery({
      title: data.title,
      img: responseImage?.url,
    });
    reset();
  };
  return (
    <section className={scss.TodoAdd}>
      <div className="container">
        <div className={scss.content}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="title"
              {...register("title", { required: true })}
            />
            <input type="file" {...register("file", { required: true })} />
            <button type="submit">add todo</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default TodoAdd;
