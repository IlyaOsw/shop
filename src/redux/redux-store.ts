import { legacy_createStore as createStore, combineReducers } from "redux";
import shopReducer from "./shop-reducer";
import cartReducer from "./cart-reducer";
import navbarReducer from "./navbar-reducer";

const rootReducer = combineReducers({
  navbar: navbarReducer,
  shopPage: shopReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
