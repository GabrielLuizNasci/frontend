import { baseUrl } from './api';

export async function getEditoras() {
  const res = await fetch(`${baseUrl}/editoras`);
  return res.json();
}

export async function createEditora(data: any) {
  const res = await fetch(`${baseUrl}/editoras`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}