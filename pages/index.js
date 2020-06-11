import Head from "next/head";
import react, { useState } from "react";
import CreateUser from "../components/createUser";
import { UserContext } from "./../context/userContext";
import UserList from "../components/userList";

const Home = (props) => {
  const [users, setUsers] = useState(props.iniUsers);

  const handleAdd = (user) => {
    setUsers([...users, { ...user }]);
  };

  const handleDelete = (i) => {
    const filteredItems = users
      .slice(0, i)
      .concat(users.slice(i + 1, users.length));
    setUsers(filteredItems);
  };

  return (
    <div>
      <Head>
        <title>Next App</title>
      </Head>
      <CreateUser addUser={handleAdd} />
      <UserContext.Provider value={users}>
        <UserList deleteUser={handleDelete} />
      </UserContext.Provider>
    </div>
  );
};

Home.getInitialProps = async (ctx) => {
  const users = [
    { name: "subhash", email: "test111111@gmail.com", mobile: "9098999088" },
    { name: "chandra", email: "testing@gmail.com", mobile: "9090909012" },
    { name: "kushwaha", email: "test22222222@gmail.com", mobile: "9098992222" },
  ];
  return { iniUsers: users };
};
export default Home;
