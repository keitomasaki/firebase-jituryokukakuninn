import { TEXT_ADD, TEXT_DELETE } from "./action";
import initialState from "../store/initialState";

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEXT_ADD:
      console.log(state);
      const data = {
        id: action.payload.id,
        text: action.payload.text,
      };
      const newData = state.data.slice();
      newData.push(data);
      return { data: newData };
    case TEXT_DELETE:
      console.log(state.deleteId);
      return { ...state, deleteId: action.payload };
    default:
      return state;
  }
};
