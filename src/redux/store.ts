import { legacy_createStore as createStore, combineReducers } from "redux";
import shopReducer from "./reducers/shop-reducer";
import cartReducer from "./reducers/cart-reducer";
import navbarReducer from "./reducers/navbar-reducer";

const rootReducer = combineReducers({
  navbar: navbarReducer,
  shopPage: shopReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
