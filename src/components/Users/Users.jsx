// import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  //   const [users, setUsers] = useState(loadedUsers);

  return (
    <div>
      <h3>users: {loadedUsers.length}</h3>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Creation Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loadedUsers.map((user) => (
              <tr key={user._id}>
                <td>1</td>
                <th>{user.email}</th>
                <td>{user.createdAt}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
