import React, { useEffect } from "react";
import { useState } from "react";
import {
  firebaseSubmit,
  firebaeDelete,
  logout,
  testsubmit,
} from "../reducks/user/operation";
import { mountedAction } from "../reducks/user/action";
import { push } from "connected-react-router";
import { useDispatch, useSelector } from "react-redux";
import { stateSelector } from "../reducks/user/selector";
import { db } from "../firebase/index";

const Home = () => {
  const state = useSelector(stateSelector);
  const dispatch = useDispatch();
  const uid = state.users.uid;

  const [text, setText] = useState("");
  const [deleteId, setDeleteId] = useState(0);
  const [teacher, setTeacher] = useState("");

  const textFunc = (e) => {
    setText(e.target.value);
  };

  const deleteIdFunc = (e) => {
    // setDeleteId((deleteId) => (deleteId = Number(e.target.value)));
    setDeleteId(Number(e.target.value));
  };

  const textSubmit = () => {
    dispatch(firebaseSubmit(text, uid));
  };

  const deleteidSubmit = () => {
    dispatch(firebaeDelete(deleteId));
  };

  const test = () => {
    dispatch(testsubmit(text, uid));
  };

  const selectTeacher = (e) => {
    setTeacher(e.target.value);
    console.log(e.target.value);
  };

  // useEffect(() => {
  //   db.collection("text")
  //     .get()
  //     .then((snapshots) => {
  //       const list = [];
  //       snapshots.forEach((snapshots) => {
  //         list.push(snapshots.data());
  //       });
  //       dispatch(mountedAction(list));
  //     });
  // }, []);

  // collection("event")
  //     .doc(String(uid))
  //     .collection(String(uid))
  //     .doc(String(id))
  //     .set(data)

  useEffect(() => {
    db.collection("event")
      .doc(String(uid))
      .collection(String(uid))
      .get()
      .then((snapshots) => {
        const list = [];
        snapshots.forEach((snapshots) => {
          list.push(snapshots.data());
        });
        dispatch(mountedAction(list));
      });
  }, []);

  return (
    <div>
      <h3>home</h3>
      <div>
        <select value={teacher} onChange={selectTeacher}>
          <option hidden>先生を選択してください</option>
          <option value="saitou">斎藤</option>
          <option value="nakatani">中谷</option>
          <option value="kawai">川合</option>
        </select>
        <button>先生決定</button>
      </div>
      <input type="text" onChange={textFunc} />
      <button onClick={textSubmit}>button</button>
      <select value={deleteId} onChange={deleteIdFunc}>
        <option value={0}>Please select an option</option>
        {state.data.map((item, index) => {
          return (
            <option value={item.id} key={index}>
              {item.id}
            </option>
          );
        })}
      </select>
      <button onClick={deleteidSubmit}>delete</button>
      {deleteId}
      <button onClick={() => dispatch(logout())}>logout</button>
      <button onClick={() => dispatch(push("/Calender"))}>to calender</button>
      <button onClick={test}>firestore test</button>
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
