import React from "react";
import { Routes, Route } from "react-router-dom";
import AirpodsPage from "../pages/AirpodsPage/AirpodsPage";
import ClientsPage from "../pages/ClientsPage/ClientsPage";
import ContactsPage from "../pages/ContactsPage/ContactsPage";
import MainPage from "../pages/MainPage/MainPage";
import NewsPage from "../pages/NewsPage/NewsPage";
import PhonePage from "../pages/PhonePage/PhonePage";
import WatchPage from "../pages/WatchPage/WatchPage";

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/phone" element={<PhonePage />} />
      <Route path="/headphones" element={<AirpodsPage />} />
      <Route path="/watch" element={<WatchPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/clients" element={<ClientsPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>
  );
};

export default Routing;
