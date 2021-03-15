import React, { useState } from "react";
import { test } from "../reducks/test1/action";
import { useDispatch } from "react-redux";
import TextInput2 from "./TextInput2";

const Login = () => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);

  const test1 = () => {
    dispatch(test());
    setCount(count + 1);
  };
  return (
    <div>
      <h3>signin</h3>
      <button onClick={test1}>button</button>
      <p data-testid="count">{count}</p>
      <TextInput2 />
    </div>
  );
};

export default Login;
