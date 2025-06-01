import styles from './MovieList.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function MovieList({ movies }) {
  const location = useLocation();
  console.log(location);

  return (
    <ul className={styles.movieList}>
      {movies.map((movie) => {
        return (
          <li key={movie.id} className={styles.movieItem}>
            <Link
              to={`${movie.id}`}
              className={styles.movieLink}
              state={location}
            >
              {movie.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}