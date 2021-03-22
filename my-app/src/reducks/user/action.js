// export const SIGN_IN = "SIGN_IN";
// export const signInAction = (state) => {
//   return {
//     type: SIGN_IN,
//     payload: state,
//   };
// };

export const TEXT_ADD = "TEXT_ADD";
export const textAddAction = (text, id) => {
  return {
    type: TEXT_ADD,
    payload: {
      id,
      text,
    },
  };
};

export const SIGN_IN = "SIGN_IN";
export const signInAction = (data) => {
  return {
    type: SIGN_IN,
    payload: data,
  };
};

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => {
  return {
    type: SIGN_OUT,
    payload: {
      isSignedIn: false,
      uid: "",
    },
  };
};

export const TEXT_DELETE = "TEXT_DELETE";
export const textDeleteAction = (id) => {
  return {
    type: TEXT_DELETE,
    payload: id,
  };
};

export const MOUNTED = "MOUNTED";
export const mountedAction = (list) => {
  return {
    type: MOUNTED,
    payload: list,
  };
};

export const CLASSTIME_ADD = "CLASSTIME_ADD";
export const classtimeAddAction = (title, start, end, id) => {
  return {
    type: CLASSTIME_ADD,
    payload: {
      title,
      start,
      end,
      id,
    },
  };
};

export const EVENTLISTMOUNTED = "EVENTLISTMOUNTED";
export const eventListMountedAction = (list) => {
  return {
    type: EVENTLISTMOUNTED,
    payload: list,
  };
};

export const EVENT_DELETE = "EVENT_DELETE";
export const eventDeleteAction = (id) => {
  return {
    type: EVENT_DELETE,
    payload: id,
  };
};

export const EVENT_CHANGE = "EVENT_CHANGE";
export const eventChangeAction = (title, start, end, id) => {
  return {
    type: EVENT_CHANGE,
    payload: {
      title,
      start,
      end,
      id,
    },
  };
};
