import axios from 'axios';

const API = axios.create({ baseURL: 'https://requin-server.onrender.com/api' });

export const register = (userData) => API.post('/auth/register', userData);
export const login = (userData) => API.post('/auth/login', userData);
