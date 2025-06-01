import styles from './Navigation.module.css';
import clsx from "clsx";
import { NavLink } from 'react-router-dom';

export default function AppHeader() {
  return (
    <header className={styles.hadr}>
      <ul className={styles.hadrNavList}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return clsx(styles.hadrNavLink, isActive && styles.linkIsActive);
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            className={({ isActive }) => {
              return clsx(styles.hadrNavLink, isActive && styles.linkIsActive);
            }}
          >
            Search movie
          </NavLink>
        </li>
      </ul>
    </header>
  );
}