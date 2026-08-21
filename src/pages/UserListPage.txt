import React from 'react';
import { useUsers } from '../hooks/useUsers';
import { formatDate } from '../utils/formatDate';
import { ErrorBanner } from '../components/ErrorBanner';

export const UserListPage: React.FC = () => {
  const { data: users, loading, error } = useUsers();

  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorBanner message="ユーザー一覧の取得に失敗しました" />;

  return (
    <div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>名前</th>
            <th>メールアドレス</th>
            <th>登録日</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{formatDate(u.createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
