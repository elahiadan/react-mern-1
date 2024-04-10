import { createStore, applyMiddleware, compose } from "redux";
import PromiseMiddleware from "redux-promise";
import appReducer from "./reducers";

const reduxStore = () => {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    appReducer,
    composeEnhancer(applyMiddleware(PromiseMiddleware))
  );
  return store;
};

export default reduxStore;
