import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { App } from "./App";
import store from "./redux/store";

const firebaseConfig = {
  apiKey: "AIzaSyDTKkMFxKrc9Qev_cxsCbxt2xv8H9_jM2M",
  authDomain: "e-store-22bae.firebaseapp.com",
  projectId: "e-store-22bae",
  storageBucket: "e-store-22bae.appspot.com",
  messagingSenderId: "247017141323",
  appId: "1:247017141323:web:e6455510aabc3a3c6a89ce",
  measurementId: "G-9Q2TMCL7QC",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
