import { useRouteError } from 'react-router-dom';
import Error from '../components/Error';

type ErrorResponse = {
  status?: number;
  statusText?: string;
  message?: string;
};

export default function ErrorPage() {
  const error = useRouteError() as ErrorResponse;

  return (
    <main>
      <Error
        status={error.status}
        statusText={error.statusText}
        message={error.message}
      />
    </main>
  );
}
