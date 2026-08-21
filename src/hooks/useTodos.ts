import { useCallback, useEffect, useState } from 'react';
import { fetchTodos, toggleTodo, Todo } from '../api/todoApi';

export function useTodos() {
  const [data, setData] = useState<Todo[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const refetch = useCallback(() => {
    setLoading(true);
    fetchTodos()
      .then((todos) => setData(todos))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    refetch();
  }, [refetch]);

  const toggle = useCallback(
    async (id: string, completed: boolean) => {
      try {
        const updated = await toggleTodo(id, completed);
        setData((prev) =>
          prev ? prev.map((t) => (t.id === updated.id ? updated : t)) : prev
        );
      } catch (err) {
        setError(err as Error);
      }
    },
    []
  );

  return { data, loading, error, refetch, toggle };
}
