import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Buttons/ScrollToTop/ScrollToTop";
import i18n from "./i18n";

export const App: React.FC = () => {
  // i18n.init({
  //   resources: {
  //     en: {
  //       translation: require("./locales/en/translation.json"),
  //     },
  //     ee: {
  //       translation: require("./locales/ee/translation.json"),
  //     },
  //     ru: {
  //       translation: require("./locales/ru/translation.json"),
  //     },
  //   },
  // });
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Footer />
    </>
  );
};
