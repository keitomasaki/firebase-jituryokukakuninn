import { TEST } from "./action";
import initialState from "../store/initialState";

export const test1Reducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      console.log("test1");
      return state;
    default:
      return state;
  }
};
