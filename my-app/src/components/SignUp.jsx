import React, { useState } from "react";
import { test } from "../reducks/test1/action";
import { useDispatch } from "react-redux";
import TextInput from "./TextInput";

const Login = () => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  const test1 = () => {
    dispatch(test());
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={test1}>button</button>
      <p data-testid="count">{count}</p>
      <TextInput />
    </div>
  );
};

export default Login;
