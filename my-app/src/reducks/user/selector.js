import { createSelector } from "reselect";

const stateSelector = (state) => state.userReducer;
const isSignedIn = (state) => state.userReducer.users.isSignedIn;

export { stateSelector, isSignedIn };
