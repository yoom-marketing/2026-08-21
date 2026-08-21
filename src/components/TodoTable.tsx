import React from 'react';
import type { Todo } from '../api/todoApi';

type Props = {
  todos: Todo[];
  onToggle: (id: string, completed: boolean) => void;
};

export const TodoTable: React.FC<Props> = ({ todos, onToggle }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>タイトル</th>
          <th>完了</th>
          <th>ユーザーID</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((t) => (
          <tr key={t.id}>
            <td>{t.id}</td>
            <td>{t.title}</td>
            <td>
              <input
                type="checkbox"
                checked={t.completed}
                onChange={(e) => onToggle(t.id, e.target.checked)}
              />
            </td>
            <td>{t.userId}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
