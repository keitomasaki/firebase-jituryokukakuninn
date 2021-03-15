import { db } from "../firebase/index";

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

// export const firebaseSubmit = (text) => {
//   return async () => {
//     const data = {
//       text: text,
//     };
//     db.collection("text")
//       .doc(text)
//       .set(data)
//       .then(console.log("firebasesubmitsikou"));
//   };
// };

// export const firebaseSubmit = (text, id) => {
//   console.log(text, id);
//   const data = {
//     text: text,
//     id: id,
//   };
//   db.collection("text")
//     .doc(String(id))
//     .set(data)
//     .then(console.log("firebasesubmitsikou"));
// };

export const firebaeDelete = (id) => {
  console.log("dlete");
  db.collection("text").doc("111").delete().then(console.log("deleteseikou"));
};

export const firebaseUpdate = () => {
  db.collection("text").doc("111").update({
    text: 222,
    id: 1,
  });
};
