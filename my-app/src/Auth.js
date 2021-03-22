import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isSignedIn } from "./reducks/user/selector";
import { listenAuthState } from "./reducks/user/operation";

export const Auth = ({ children }) => {
  const dispatch = useDispatch();
  const isSignedInData = useSelector(isSignedIn);
  console.log(isSignedInData);
  useEffect(() => {
    const f = () => {
      if (!isSignedInData) {
        dispatch(listenAuthState());
      }
    };
    f();
  }, []);

  if (!isSignedInData) {
    console.log("ログインしていない");
    return <></>;
  } else {
    console.log("true,認証成功");
    return children;
  }

  return children;
};

export default Auth;
