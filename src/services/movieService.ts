import axios, { type AxiosResponse } from 'axios';
import type { Movie } from '../types/movie';

interface FetchMoviesResponse {
  results: Movie[];
}

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

export async function fetchMovies(query: string): Promise<Movie[]> {
  const token = import.meta.env.VITE_TMDB_TOKEN;

  const response: AxiosResponse<FetchMoviesResponse> =
    await axios.get<FetchMoviesResponse>(BASE_URL, {
      params: {
        query,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

  return response.data.results;
}