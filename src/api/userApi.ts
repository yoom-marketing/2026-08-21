import httpClient from './httpClient';

export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};

export async function fetchUsers(): Promise<User[]> {
  const res = await httpClient.get<User[]>('/users');
  return res.data;
}

export async function createUser(payload: Pick<User, 'name' | 'email'>): Promise<User> {
  const res = await httpClient.post<User>('/users', payload);
  return res.data;
}
