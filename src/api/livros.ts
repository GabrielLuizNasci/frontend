import { api } from './api';

export async function getLivros() {
  const res = await api.get('/livros');
  return res.data;
}

export async function createLivro(data: any) {
  const res = await api.post('/livros', data);
  return res.data;
}

export async function updateLivro(id: number, data: any) {
  const res = await api.put(`/livros/${id}`, data);
  return res.data;
}

export async function deleteLivro(id: number) {
  const res = await api.delete(`/livros/${id}`);
  return res.data;
}