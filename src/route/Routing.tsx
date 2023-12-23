import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Preloader from "../components/Preloader/Preloader";

const MainPage = React.lazy(() => import("../pages/MainPage/MainPage"));
const PhonePage = React.lazy(() => import("../pages/PhonePage/PhonePage"));
const AirpodsPage = React.lazy(
  () => import("../pages/AirpodsPage/AirpodsPage")
);
const WatchPage = React.lazy(() => import("../pages/WatchPage/WatchPage"));
const NewsPage = React.lazy(() => import("../pages/NewsPage/NewsPage"));
const ClientsPage = React.lazy(
  () => import("../pages/ClientsPage/ClientsPage")
);
const ContactsPage = React.lazy(
  () => import("../pages/ContactsPage/ContactsPage")
);

const Routing: React.FC = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/phone" element={<PhonePage />} />
        <Route path="/headphones" element={<AirpodsPage />} />
        <Route path="/watch" element={<WatchPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </Suspense>
  );
};

export default Routing;
