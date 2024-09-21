import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link}>
        cosc560 Assessment 3 - Kieran Hiller
      </Link>
    </header>
  );
}
