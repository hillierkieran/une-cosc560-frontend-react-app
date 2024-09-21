import React from 'react';
import styles from '../styles/Error.module.css';

type ErrorProps = {
  message?: string;
  status?: number;
  statusText?: string;
};

const Error: React.FC<ErrorProps> = ({
  message = 'An unexpected error occurred.',
  status = 500,
  statusText,
}) => {
  return (
    <div className={styles.errorContainer}>
      <h1>Oops!</h1>
      <p>Sorry, something went wrong.</p>
      <p>
        <i>
          {status} {statusText || message}
        </i>
      </p>
    </div>
  );
};

export default Error;
