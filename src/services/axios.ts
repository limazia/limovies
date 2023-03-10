import axios from 'axios';

//const API_KEY = '';
const TOKEN = '';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${TOKEN}`
  }
});

export const getFilms = () => api.get('movie/popular?language=pt-BR&page=1');
