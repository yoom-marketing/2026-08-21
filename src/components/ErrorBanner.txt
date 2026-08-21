import React from 'react';

type Props = {
  message: string;
};

export const ErrorBanner: React.FC<Props> = ({ message }) => {
  return (
    <div style={{ backgroundColor: '#fee2e2', color: '#b91c1c', padding: 8 }}>
      {message}
    </div>
  );
};
