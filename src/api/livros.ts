import { baseUrl } from './api';

export async function getLivros() {
  const res = await fetch(`${baseUrl}/livros`);
  return res.json();
}

export async function createLivro(data: any) {
  const res = await fetch(`${baseUrl}/livros`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}