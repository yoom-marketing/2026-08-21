import { useEffect, useState } from 'react';
import { fetchUsers, User } from '../api/userApi';

export function useUsers() {
  const [data, setData] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchUsers()
      .then((users) => {
        if (mounted) {
          setData(users);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err);
        }
      })
      .finally(() => {
        if (mounted) {
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  return { data, loading, error };
}
