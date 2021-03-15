import { TEST2 } from "./action";
import initialState from "../store/initialState";

export const test2Reducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST2:
      console.log("test2");
      return state;
    default:
      return state;
  }
};
