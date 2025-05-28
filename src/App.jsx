import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation/Navigation';
import MovieCast from './components/MovieCast/MovieCast';
import MovieReviews from './components/MovieReviews/MovieReviews';
import './App.css'

const HomePage = lazy(() => import('../src/pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../src/pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../src/pages/MovieDetailsPage/MovieDetailsPage'),
);
const NotFoundPage = lazy(() =>
  import('../src/pages/NotFoundPage/NotFoundPage'),
);

export default function App() {
  return (
    <>
      <Navigation/>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}