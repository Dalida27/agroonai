import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:7070/api/v1',
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
