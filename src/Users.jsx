import React, { useEffect, useState } from "react";

const generateUsers = () => {
  return [
    { id: 1, name: "sali" },
    { id: 2, name: "Eli" },
    { id: 3, name: "Nini" },
    { id: 4, name: "Gio" },
    { id: 5, name: "sali" },
  ];
};
//mounting დროს გადაეცემა ფუნქცია და ცარიელი dependency array

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(generateUsers);
  }, []);

  const handleRemoveUser = () => {
    const generateIndex = Math.floor(Math.random() * users.length);

    setUsers((prevUsers) => {
      return prevUsers.filter((_, index) => index !== generateIndex);
    });
  };

  useEffect(() => {
    document.title = `${users.length}`;
  }, [users]);

  return (
    <div>
      {users.map((user) => {
        return <h1 key={user.id}>{user.name}</h1>;
      })}
      <button onClick={handleRemoveUser}>delete random user</button>
    </div>
  );
};

export default Users;
