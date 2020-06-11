import React, { useState } from "react";
const CreateUser = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addUser({ name, email, mobile });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="item">
        First Name:
        <input
          id="fname"
          name="fname"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="item">
        Email:
        <input
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="item">
        Mobile:
        <input
          id="mobile"
          name="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>
      <div>
        <input type="submit" id="submit" value="submit" />
      </div>
      <style jsx>
        {`form {
          display:flex;
        flex-direction:column;l
        align-items:center;
        }
        .item{
            margin-bottom:5px;
        }`}
      </style>
    </form>
  );
};

export default CreateUser;
