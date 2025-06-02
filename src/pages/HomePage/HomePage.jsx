import styles from './HomePage.module.css';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from '../../mtsAPI';
import { useEffect, useState } from 'react';

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
      <h1>Trending today</h1>
      <ul className={styles.title}>
        {trendingMovies.map((movie) => {
          return (
            <li key={movie.id}>
              <Link to={`movies/${movie.id}`}>{movie.title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}