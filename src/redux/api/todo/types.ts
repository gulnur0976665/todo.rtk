export namespace TODO {
  export type GetTodosResponse = ITodo[];
  export type GetTodosRequest = void;

  export type PostTodoResponse = ITodo[];
  export type PostTodoRequest = ITodo;

  export type DeleteTodoResponse = ITodo[];
  export type DeleteTodoRequest = number;
}
