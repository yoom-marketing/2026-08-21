import React from 'react';
import type { User } from '../api/userApi';
import { formatDate } from '../utils/formatDate';

type Props = {
  users: User[];
};

export const UserTable: React.FC<Props> = ({ users }) => {
  return (
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
        {users.map((u) => (
          <tr key={u.id}>
            <td>{u.id}</td>
            <td>{u.name}</td>
            <td>{u.email}</td>
            <td>{formatDate(u.createdAt)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
