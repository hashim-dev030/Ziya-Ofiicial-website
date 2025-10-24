import { v4 as uuidv4 } from 'uuid';
export function getCourseId(key: string) {
  const stored = localStorage.getItem(key);
  if (stored) return stored;

  const newId = uuidv4();
  localStorage.setItem(key, newId);
  return newId;
}
