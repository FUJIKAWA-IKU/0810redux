import React from 'react';
import { useQuery } from '@tanstack/react-query';

const User = () => {

  const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
  };

  const { data, isLoading, isError, error } = useQuery('users', fetchUsers);

  if (isLoading) {
    return (
      <p>Loading</p>
    );
  }

  if (isError) {
    return (
      <p>{error.message}</p>
    );
  }

  return (
    <>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default User;
