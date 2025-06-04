import styles from './HomePage.module.css';
import { fetchTrendingMovies } from '../../mtsAPI';
import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const movies = await fetchTrendingMovies();
        setTrendingMovies(movies);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p>Loading data, please wait...</p>;
  if (error) return <ErrorMessage />;

  return (
    <main>
      <h1 className={styles.title}>Trending today</h1>
      <MovieList movies={trendingMovies} />
    </main>
  );
}
