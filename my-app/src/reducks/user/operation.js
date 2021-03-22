import { auth, db } from "../../firebase/index";
// import { stateSelector } from "./selector";
// import { useSelector } from "react-redux";
import { push } from "connected-react-router";
import {
  textAddAction,
  textDeleteAction,
  signInAction,
  classtimeAddAction,
  eventDeleteAction,
  eventChangeAction,
  signOutAction,
} from "../user/action";

const usersRef = db.collection("users");
// const currentUser = auth.currentUser;
// const state = useSelector(stateSelector);

export const signUp = (email, password) => {
  console.log("sssssssssssssssssssss");
  return async (dispatch) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        const uid = user.uid;
        if (user) {
          const userInitialData = {
            email: user.email,
            uid: user.uid,
            role: "customer",
          };
          usersRef.doc(uid).set(userInitialData);
        }
        dispatch(push("/Home"));
        dispatch(signInAction(true));
      })
      .catch((error) => {
        alert("アカウント登録に失敗しました。もう1度お試しください。");
        throw new Error(error);
      });
  };
};

export const signIn = (emial, password) => {
  return async (dispatch) => {
    auth.signInWithEmailAndPassword(emial, password).then((result) => {
      const uid = result.uid;
      console.log(uid);

      db.collection("users")
        .doc(uid)
        .get()
        .then((snapshot) => {
          const data = snapshot.data();

          dispatch(
            signInAction({
              isSignedIn: true,
              uid: result.user.uid,
            })
          );
        });

      dispatch(push("/Home"));
    });
  };
};

export const listenAuthState = () => {
  return async (dispatch) => {
    return await auth.onAuthStateChanged((user) => {
      if (user) {
        db.collection("users")
          .doc(user.uid)
          .get()
          .then((snapshot) => {
            const data = snapshot.data();

            dispatch(
              signInAction({
                isSignedIn: true,
                uid: user.uid,
              })
            );
          });

        dispatch(push("/Home"));
        console.log("ログイン成功　userのId", user.uid);
      } else {
        dispatch(push("/"));
        console.log("2");
      }
    });
  };
};

export const logout = (emial, password) => {
  return async (dispatch) => {
    auth.signOut().then(() => {
      dispatch(signOutAction);
      dispatch(push("/"));
    });
  };
};

// export const firebaseSubmit = (text) => {
//   return async (dispatch) => {
//     let id = Math.floor(Math.random() * 10000);
//     console.log(text);
//     const data = {
//       text: text,
//       id: id,
//     };
//     await db
//       .collection("text")
//       .doc(String(id))
//       .set(data)
//       .then(() => {
//         console.log("firebasesubmitseikou");
//         dispatch(textAddAction(text, id));
//       });
//   };
// };

// export const firebaseSubmit = (text, uid,) => {
//   return async (dispatch) => {
//     let id = Math.floor(Math.random() * 10000);
//     console.log(text);
//     const data = {
//       text: text,
//       id: id,
//     };
//     await db
//       .collection("event")
//       .doc(String(uid))
//       .collection(String(uid))
//       .doc(String(id))
//       .set(data)
//       .then(() => {
//         console.log("firebasesubmitseikou");
//         dispatch(textAddAction(text, id));
//       });
//   };
// };

export const firebaseSubmit = (text, uid, teacher) => {
  return async (dispatch) => {
    let id = Math.floor(Math.random() * 10000);
    console.log(text);
    const data = {
      text: text,
      id: id,
    };
    await db
      .collection("event")
      .doc(String(uid))
      .collection(String(teacher))
      .doc(String(id))
      .set(data)
      .then(() => {
        console.log("firebasesubmitseikou");
        dispatch(textAddAction(text, id));
      });
  };
};

export const testsubmit = (text1) => {
  return async (dispatch) => {
    const text = {
      text: text1,
    };
    // db.collection("rooms")
    //   .doc("roomA")
    //   .collection("messages")
    //   .doc("message1")
    //   .then(() => console.log("room"));

    // db.collection("正木先生").doc("正木先生").collection("ケイト君").doc("oosaka").set({
    //   name: "Los Angeles",
    //   state: "CA",
    //   country: "USA",
    // });
    db.collection("event")
      .doc("teacher_masaki")
      .collection("kaito_student")
      .doc("2")
      .set({
        name: "Los Angeles",
        state: "CA",
        country: "USA",
      });
  };
};

export const testget = {};

export const firebaeDelete = (deleteId) => {
  return async (dispatch) => {
    console.log(deleteId);
    const string_deleteId = String(deleteId);
    db.collection("text")
      .doc(string_deleteId)
      .delete()
      .then(() => {
        console.log("deleteseikou");
        dispatch(textDeleteAction(deleteId));
      });
  };
};

export const eventListFirbseSubmit = (title, start, end) => {
  console.log(title, start, end);
  return async (dispatch) => {
    let id = Math.floor(Math.random() * 10000);
    const data1 = {
      title: title,
      start: start,
      end: end,
      id: id,
    };
    console.log(id);
    await db
      .collection("eventList")
      .doc(String(id))
      .set(data1)
      .then(() => {
        console.log("eventListFirbseSubmit");
        dispatch(classtimeAddAction(title, start, end, id));
      });
  };
};

export const eventDelete = (id) => {
  return async (dispatch) => {
    db.collection("eventList")
      .doc(String(id))
      .delete()
      .then(() => {
        console.log("eventdeleteseikou");
        dispatch(eventDeleteAction(id));
      });
  };
};

export const eventChange = (title, start, end, id) => {
  console.log(title, start, end, id);
  return async (dispatch) => {
    db.collection("eventList")
      .doc(String(id))
      .update({
        title: title,
        start: start,
        end: end,
        id: id,
      })
      .then(() => {
        dispatch(eventChangeAction(title, start, end, id));
      });
  };
};
