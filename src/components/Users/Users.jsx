import React from "react";
import { useLoaderData } from "react-router";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();

  return (
    <div>
      <p>This is users</p>
      {users.map((user) => (
        <User user={user} key={user.id}></User>
      ))}
    </div>
  );
};

export default Users;
