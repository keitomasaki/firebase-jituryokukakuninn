import {
  TEXT_ADD,
  TEXT_DELETE,
  SIGN_IN,
  SIGN_OUT,
  MOUNTED,
  CLASSTIME_ADD,
  EVENTLISTMOUNTED,
  EVENT_DELETE,
  EVENT_CHANGE,
} from "./action";
import initialState from "../store/initialState";

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, users: action.payload };

    case SIGN_OUT:
      return { ...state, users: action.payload };

    case TEXT_ADD:
      const data = {
        id: action.payload.id,
        text: action.payload.text,
      };
      const newData = state.data.slice();
      newData.push(data);
      return { ...state, data: newData };

    case TEXT_DELETE:
      console.log(action.payload);
      const test = state.data.filter((data) => data.id !== action.payload);
      return { ...state, data: test };

    case MOUNTED:
      return { ...state, data: action.payload };

    case CLASSTIME_ADD:
      const data1 = {
        title: action.payload.title,
        start: action.payload.start,
        end: action.payload.end,
        id: action.payload.id,
      };
      const newData1 = state.classData.slice();
      newData1.push(data1);
      console.log(state);
      return { ...state, classData: newData1 };

    case EVENTLISTMOUNTED:
      return { ...state, classData: action.payload };

    case EVENT_DELETE:
      const deletedEventData = state.classData.filter(
        (data) => data.id !== action.payload
      );
      return { ...state, classData: deletedEventData };

    case EVENT_CHANGE:
      let changedEventData = state.classData.filter(
        (data) => data.id !== action.payload.id
      );
      const changedData = {
        title: action.payload.title,
        start: action.payload.start,
        end: action.payload.end,
        id: action.payload.id,
      };
      // changedEventData = { ...changedEventData, classData: changedData };
      changedEventData.push(changedData);
      console.log(changedEventData);
      return { ...state, classData: changedEventData };

    default:
      return state;
  }
};
