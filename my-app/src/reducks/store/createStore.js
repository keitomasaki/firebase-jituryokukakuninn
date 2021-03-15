import {
  createStore as reduxCreateStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";

// const reducer = combineReducers({
//   ...rootReducer,
// });

// const store = createStore(reducer);

export default function createStore(history) {
  return reduxCreateStore(
    combineReducers({
      ...rootReducer,
      router: connectRouter(history),
    }),
    applyMiddleware(thunk, routerMiddleware(history))
  );
}

// const store = reduxCreateStore(
//   combineReducers({
//     ...rootReducer,
//   }),
//   applyMiddleware(thunk)
// );

// export default store;
