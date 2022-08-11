import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from "react";

const User = () => {

  const fetchUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    return res.json();
  };

  const { data, isLoading, isError, error } = useQuery('users', fetchUsers);


  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetchUsers().then((data) => {
  //     setUsers(data);
  //   });
  // }, []);
  // console.log(users);




  if (isLoading) {
    return (
      <p>Loading</p>
    );
  }

  console.log(error.message);

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

      {/* <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul> */}
    </>
  );
}

export default User;
