namespace TODO {
  type GetTodosResponse = ITodo[];
  type GetTodosRequest = void;

  type PostTodoResponse = ITodo[];
  type PostTodoRequest = ITodo;

  type DeleteTodoResponse = ITodo[];
  type DeleteTodoRequest = number;
}
