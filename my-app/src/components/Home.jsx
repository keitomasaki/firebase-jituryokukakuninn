import React from "react";
import { useState } from "react";
import { firebaseSubmit, test3 } from "../reducks/user/operation";
import { firebaeDelete, firebaseUpdate } from "../firebase-helpers/functions";
import { useDispatch, useSelector } from "react-redux";
import { test } from "../reducks/test1/action";
import { textAddAction } from "../reducks/user/action";
import { stateSelector } from "../reducks/user/selector";

const Home = () => {
  const [text, setText] = useState("");
  const [id, setId] = useState(0);
  const [deleteId, setDeleteId] = useState(0);

  const dispatch = useDispatch();

  const textFunc = (e) => {
    setText(e.target.value);
  };

  const deleteIdFunc = (e) => {
    setDeleteId(e.target.value);
    console.log(e.target.value);
    console.log("e.target.value");
  };

  const submit = (text) => {
    setId(id + 1);
    firebaseSubmit(text, id);
  };

  const state = useSelector(stateSelector);
  console.log(state.data);

  return (
    <div>
      <h3>home</h3>
      <input type="text" onChange={textFunc} />
      <button onClick={() => dispatch(firebaseSubmit(text))}>button</button>
      <button onClick={() => dispatch(textAddAction())}>button</button>
      <button onClick={() => dispatch(test3())}>test</button>
      {/* <button onClick={() => firebaseUpdate()}>test</button> */}
      <select value={deleteId} onChange={deleteIdFunc}>
        <option value={null}></option>
        {state.data.map((item, index) => {
          return (
            <option value={item.id} key={index}>
              {item.id}
            </option>
          );
        })}
      </select>
      {state.data.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.text}</p>
            <p>{item.id}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
