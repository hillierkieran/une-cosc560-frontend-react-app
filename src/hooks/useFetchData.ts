import { useEffect, useState } from 'react';

// Custom hook for fetching data with loading and error handling
export const useFetchData = <T>(
  apiFunction: () => Promise<T | null>,
  dependencies: any[] = [],
  shouldFetch: boolean = true
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(shouldFetch);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!shouldFetch) return; // Exit early if we shouldn't fetch

    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await apiFunction();
        if (result) {
          setData(result);
        } else {
          setError('No data found.');
        }
      } catch (err) {
        setError('Error loading data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [...dependencies]); // Pass dependencies to control when to re-run

  return { data, loading, error };
};
