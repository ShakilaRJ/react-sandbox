const AUTH_URL = 'https://dummyjson.com/auth/login';
const FEEDBACK_URL = 'https://jsonplaceholder.typicode.com/posts';

export const loginUser = async (username: string, password: string) => {
  const response = await fetch(AUTH_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });

  if (!response.ok) throw new Error("Wrong credentials!");

  const data = await response.json();
  return data;
};

export const sendFeedback = async (title: string, message: string) => {
  const response = await fetch(FEEDBACK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: title,
      body: message,
      userId: 1
    })
  });

  const data = await response.json();
  return data;
};