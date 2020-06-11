import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

const UserList = (props) => {
  const userList = useContext(UserContext);
  const { deleteUser } = props;
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Mobile</td>
            <td>Email</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, i) => (
            <tr key={i}>
              <td>{user.name}</td>
              <td>{user.mobile}</td>
              <td>{user.email}</td>
              <td>
                <a href="#" id={`user_${i}`} onClick={() => deleteUser(i)}>
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <style jsx>
        {`
          table,
          tr,
          td {
            border-collapse: collapse;
            border: 1px solid black;
          }
          td {
            padding: 5px;
          }
        `}
      </style>
    </div>
  );
};
export default UserList;
