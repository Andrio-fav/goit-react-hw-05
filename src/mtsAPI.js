import axios from 'axios';

const API_KEY = '3d55676118a80418b3bbc38dfa2ecc22'; 
const BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const options = {
  params: {
    api_key: API_KEY,
  },
};

export async function fetchTrendingMovies() {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, options);
  return response.data.results;
}

export async function fetchMovieDetails(movieId) {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    ...options,
    params: {
      ...options.params,
      language: 'en-US',
    },
  });
  return response.data;
}

export async function fetchMovieCast(movieId) {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    ...options,
    params: {
      ...options.params,
      language: 'en-US',
    },
  });
  return response.data.cast;
}

export async function fetchMovieReviews(movieId) {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
    ...options,
    params: {
      ...options.params,
      language: 'en-US',
    },
  });
  return response.data.results;
}

export async function fetchMovies(query) {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    ...options,
    params: {
      ...options.params,
      query: query,
      include_adult: false,
      language: 'en-US',
      page: 1,
    },
  });
  return response.data.results;
}