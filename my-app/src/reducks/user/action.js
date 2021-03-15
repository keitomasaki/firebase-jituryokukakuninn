export const SIGN_IN = "SIGN_IN";
export const signInAction = (state) => {
  return {
    type: SIGN_IN,
    payload: state,
  };
};

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

export const TEXT_DELETE = "TEXT_DELETE";
export const textDeleteAction = (id) => {
  return {
    type: TEXT_DELETE,
    payload: id,
  };
};
