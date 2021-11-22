import React, { useState } from "react";
import "./loginWindow.css";

const LoginWindow = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onchange = (e) => {
    if (e.target.name == "username") setUsername(e.target.value);
    if (e.target.name == "password") setPassword(e.target.value);
  };
  return (
    <div className="container m-auto my-4 p-4 text-center border rounded">
      <div className="name p-2">
        <label htmlFor="username">username </label>&nbsp;
        <input type="text" name="username" id="username" onchange={onchange} />
      </div>
      <div className="pwd p-2">
        <label htmlFor="password">password </label>&nbsp;
        <input
          type="password"
          name="password"
          id="password"
          onchange={onchange}
        />
      </div>
      <input type="submit" value="login" />
    </div>
  );
};

export default LoginWindow;
