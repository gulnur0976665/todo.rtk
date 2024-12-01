import { api as index } from "..";

const ENDPOIND = "/aef0863d7bca8200309c54aff8f4eebe/todo";

 const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<TODO.GetTodosResponse, TODO.GetTodosRequest>({
      query: () => ({
        url: `${ENDPOIND}`,
        method: "GET",
      }),
      providesTags: ["todo"],
    }),
    postTodo: builder.mutation<TODO.PostTodoResponse, TODO.PostTodoRequest>({
      query: (data) => ({
        url: `${ENDPOIND}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["todo"],
    }),
    deleteTodo: builder.mutation<
      TODO.DeleteTodoResponse,
      TODO.DeleteTodoRequest
    >({
      query: (id) => ({
        url: `${ENDPOIND}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["todo"],
    }),
  }),
});
export const { useGetTodosQuery, usePostTodoMutation, useDeleteTodoMutation } =
  api;
