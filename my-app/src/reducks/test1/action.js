export const TEST = "TEST";

export const test = (item) => {
  return {
    type: TEST,
    payload: item,
  };
};
