import React from 'react';
import styles from '../styles/Loading.module.css';

const Loading: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
