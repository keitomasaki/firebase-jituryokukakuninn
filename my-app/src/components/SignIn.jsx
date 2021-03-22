import React from "react";
import { useDispatch } from "react-redux";
import TextInput2 from "./TextInput2";
import { push } from "connected-react-router";

const Login = () => {
  const dispatch = useDispatch();

  const toSignUp = () => {
    dispatch(push("/SignUp"));
  };
  return (
    <div>
      <h3>signin</h3>
      <button onClick={toSignUp}>signup</button>
      <TextInput2 />
    </div>
  );
};

export default Login;
