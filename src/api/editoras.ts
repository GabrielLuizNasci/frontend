import { api } from './api';

export async function getEditoras() {
  const res = await api.get('/editoras');
  return res.data;
}

export async function createEditora(data: any) {
  const res = await api.post('/editoras', data);
  return res.data;
}

export async function updateEditora(id: number, data: any) {
  const res = await api.put(`/editoras/${id}`, data);
  return res.data;
}

export async function deleteEditora(id: number) {
  const res = await api.delete(`/editoras/${id}`);
  return res.data;
}