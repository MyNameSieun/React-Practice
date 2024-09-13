import axios from 'axios';

const todosAxios = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL
});

export const fetchTodos = async () => {
  return await todosAxios.get('/todos');
};
