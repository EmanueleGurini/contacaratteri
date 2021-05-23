import { createStore } from "redux";
import { rootReducer } from "../reducer/appState";

const configureStore = () => {
  return createStore(rootReducer, {});
};

export default configureStore;