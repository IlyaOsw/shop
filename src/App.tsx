import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/Buttons/ScrollToTop/ScrollToTop";

export const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Footer />
    </>
  );
};
