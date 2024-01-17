import { legacy_createStore as createStore, combineReducers } from "redux";
import shopReducer from "./reducers/shop-reducer";
import navbarReducer from "./reducers/navbar-reducer";
import clientsReducer from "./reducers/clients-reducer";
import newsReducer from "./reducers/news-reducer";

const rootReducer = combineReducers({
  navbar: navbarReducer,
  shopPage: shopReducer,
  clients: clientsReducer,
  news: newsReducer,
});

const store = createStore(rootReducer);

export default store;
