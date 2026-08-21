import React, { useEffect, useState } from 'react';
import { fetchProjects, Project } from '../api/projectApi';
import { ErrorBanner } from '../components/ErrorBanner';

export const ProjectListPage: React.FC = () => {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    fetchProjects()
      .then((data) => {
        if (mounted) {
          setProjects(data);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err as Error);
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

  if (loading) return <p>Loading...</p>;
  if (error) return <ErrorBanner message="プロジェクト一覧の取得に失敗しました" />;

  return (
    <div>
      <h1>Projects</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>プロジェクト名</th>
            <th>オーナーID</th>
          </tr>
        </thead>
        <tbody>
          {projects?.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.ownerId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
