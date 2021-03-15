import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../reducks/user/operation";

const TextInput = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const changePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={changePassword}></input>
      <input type="text" onChange={changeEmail}></input>
      <input type="text" />
      <input type="text" />
      <button onClick={() => dispatch(signUp(email, password))}>button</button>
    </div>
  );
};

export default TextInput;
