import axios from 'axios';

//const API_KEY = 'a8347441de3ac774a2cbef4710f46109';
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODM0NzQ0MWRlM2FjNzc0YTJjYmVmNDcxMGY0NjEwOSIsInN1YiI6IjYwNWZmYmY3ZWIxNGZhMDAyOGQxNDVkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M2Y8yMBJ-qoWGOsuUNAuLIS54hiJBMG8lhOPDDagsNQ';

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
export const getFilmById = (movie_id: number) => api.get(`movie/${movie_id}?&language=pt-BR`);
