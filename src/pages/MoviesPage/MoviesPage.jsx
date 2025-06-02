import { useEffect, useState } from 'react';
import { fetchMovies } from '../../mtsAPI';
import MovieList from '../../components/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  function handleSubmit(e) {
    e.preventDefault();
    const newQuery = e.target.elements.movieSearch.value;
    const newSeasrchParams = new URLSearchParams(searchParams);
    if (newQuery !== '') {
      newSeasrchParams.set('query', newQuery);
    } else {
      newSeasrchParams.delete('query');
    }
    setSearchParams(newSeasrchParams);
    e.target.reset();
  }

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const movies = await fetchMovies(query);
        setMovies(movies);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query]);

  if (error) return <ErrorMessage />;
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="movieSearch">Search for movies: </label>
        <input type="text" name="movieSearch" />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading data, please wait...</p>}
      {movies && movies.length === 0 && (
        <p>There are no movies matching your query</p>
      )}
      {movies && movies.length > 0 && !loading && <MovieList movies={movies} />}
    </>
  );
}