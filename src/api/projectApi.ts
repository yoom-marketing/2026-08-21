import httpClient from './httpClient';

export type Project = {
  id: string;
  name: string;
  ownerId: string;
};

export async function fetchProjects(): Promise<Project[]> {
  const res = await httpClient.get<Project[]>('/projects');
  return res.data;
}
