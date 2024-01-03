import { createStore, combineReducers } from "redux";
import shopReducer from "./shop-reducer";

const rootReducer = combineReducers({
  shopPage: shopReducer,
});

const store = createStore(rootReducer);

export default store;
