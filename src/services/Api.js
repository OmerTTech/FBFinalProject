import axios from 'axios';

const API_URL = '#####';

export const api = axios.create({
  baseURL: API_URL,
});

export const allData = () =>  api.get('/api/users/');
export const getUsers = (page) => api.get(`/api/users?page=${page}`);
export const createUser = (user) => api.post('/api/users', user);
export const updateUser = (id, user) => api.put(`/api/users/${id}`, user);
export const deleteUser = (id) => api.delete(`/api/users/${id}`);
export const loginUser = (user) => api.post(`/api/login`, user);
export const registerUser = (user) => api.post(`/api/register`, user);
export const getLoginUser = (id) => api.get(`/api/login${id}`);
export const singleUser = (id) => api.get(`/api/users/${id}`);

