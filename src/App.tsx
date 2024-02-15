import React from "react";

import { Navbar } from "./components/Navbar/Navbar";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { CustomAlert } from "./components/CustomAlert/CustomAlet";
import { Footer } from "./components/Footer/Footer";

export const App: React.FC = () => {
  return (
    <>
      <CustomAlert />
      <Navbar />
      <Footer />
      <ScrollToTop />
    </>
  );
};
