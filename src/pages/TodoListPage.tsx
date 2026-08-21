import React from 'react';
import { useTodos } from '../hooks/useTodos';
import { ErrorBanner } from '../components/ErrorBanner';
import { TodoTable } from '../components/TodoTable';

export const TodoListPage: React.FC = () => {
  const { data: todos, loading, error, refetch, toggle } = useTodos();

  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorBanner message="ToDo一覧の取得に失敗しました" />;

  return (
    <div>
      <h1>Todos</h1>
      <button onClick={refetch}>再読み込み</button>
      <TodoTable todos={todos ?? []} onToggle={toggle} />
    </div>
  );
};
