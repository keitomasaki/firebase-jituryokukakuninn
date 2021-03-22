import React from "react";
import { Switch, Route } from "react-router";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Calender from "./components/Calender";
import Auth from "./Auth";

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={SignIn}></Route>
      <Route exact path={"/SignUp"} component={SignUp}></Route>
      <Auth>
        <Route exact path="(/Home)" component={Home} />
        <Route exact path="(/Calender)" component={Calender} />
      </Auth>
    </Switch>
  );
};

export default Router;
