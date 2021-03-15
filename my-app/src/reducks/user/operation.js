import { auth, db } from "../../firebase/index";
import { push } from "connected-react-router";
import { textAddAction } from "../user/action";

const usersRef = db.collection("users");

export const signUp = (email, password) => {
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
        dispatch(push("/"));
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
      console.log(result);
    });
    dispatch(push("/"));
  };
};

export const firebaseSubmit = (text) => {
  return async (dispatch) => {
    let id = Math.floor(Math.random() * 6000);
    console.log(text);
    const data = {
      text: text,
      id: id,
    };
    await db
      .collection("text")
      .doc(String(id))
      .set(data)
      .then(() => {
        console.log("firebasesubmitseikou");
      });
    dispatch(textAddAction(text, id));
  };
};

// export const firebaseSubmit = (text) => {
//   let id = Math.floor(Math.random() * 6000);
//   return (dispatch) => {
//     console.log(text);
//     const data = {
//       text: text,
//       id: id,
//     };
//     db.collection("text")
//       .doc(id)
//       .set(data)
//       .then(console.log("firebasesubmitsikou"));
//     dispatch(textAddAction(text, id));
//   };
// };

export const test = () => {
  return async () => {
    const url = "https://api.github.com/users/deatiger";

    const response = await fetch(url)
      .then((res) => res.json())
      .catch(() => null);

    const username = response.login;

    console.log(username);
  };
};

export const test2 = () => {
  return async () => {
    db.collection("text")
      .doc("ミスをするな")
      .get()
      .then((doc) => {
        const data = doc.data();
        console.log(data);
      });
  };
};

export const test3 = () => {
  return (dispatch) => {
    dispatch(textAddAction());
  };
};
