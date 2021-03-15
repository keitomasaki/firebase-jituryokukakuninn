import React from "react";
import { Switch, Route } from "react-router";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/SignUp"} component={SignUp}></Route>
      <Route exact path={"(/)?"} component={Home}></Route>
      <Route exact path={"/SignIn"} component={SignIn}></Route>
    </Switch>
  );
};

export default Router;
