import httpClient from './httpClient';

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
  userId: string;
};

export async function fetchTodos(): Promise<Todo[]> {
  const res = await httpClient.get<Todo[]>('/todos');
  return res.data;
}

export async function toggleTodo(id: string, completed: boolean): Promise<Todo> {
  const res = await httpClient.patch<Todo>(`/todos/${id}`, { completed });
  return res.data;
}
