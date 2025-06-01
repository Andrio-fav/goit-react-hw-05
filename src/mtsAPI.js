import axios from 'axios';

const API_KEY = '3d55676118a80418b3bbc38dfa2ecc22';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const options = {
  params: {
    api_key: API_KEY,
  },
};

export { IMAGE_BASE_URL };

export async function fetchTrendingMovies() {
  const resp = await axios.get(`${BASE_URL}/trending/movie/day`, options);
  return resp.data.results;
}

export async function fetchMovieDetails(movieId) {
  const resp = await axios.get(`${BASE_URL}/movie/${movieId}`, options);
  return resp.data;
}

export async function fetchMovieCast(movieId) {
  const resp = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, options);
  return resp.data.cast;
}

export async function fetchMovieReviews(movieId) {
  const resp = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, options);
  return resp.data.results;
}

export async function fetchMovies(query) {
  const resp = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
      include_adult: false,
      language: 'en-US',
      page: 1,
    },
  });
  return resp.data.results;
}