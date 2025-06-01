import styles from './MovieCast.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../../tmdi-api';

export default function MovieCast() {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const actors = await fetchMovieCast(movieId);
        setMovieCast(actors);
      } catch {
        setError(true);
      }
    }
    fetchData();
  }, [movieId]);

  if (error) return <ErrorMessage />;
  if (movieCast)
    return (
      <ul className={styles.listOfActors}>
        {movieCast.map((actor) => {
          return (
            <li className={styles.actorCard} key={actor.id}>
              <img
                className={styles.actorImg}
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                width={170}
                height={240}
              />
              <h3>{actor.name}</h3>
              <p>{actor.character}</p>
            </li>
          );
        })}
      </ul>
    );
}