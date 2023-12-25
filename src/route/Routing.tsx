import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Preloader from "../components/Preloader/Preloader";
const MainPage = React.lazy(() => import("../pages/MainPage/MainPage"));
const StorePage = React.lazy(() => import("../pages/StorePage/StorePage"));
const NewsPage = React.lazy(() => import("../pages/NewsPage/NewsPage"));
const ClientsPage = React.lazy(
  () => import("../pages/ClientsPage/ClientsPage")
);
const ContactsPage = React.lazy(
  () => import("../pages/ContactsPage/ContactsPage")
);
const DetailsPage = React.lazy(
  () => import("../pages/StorePage/DetailsPage/DetailsPage")
);

const Routing: React.FC = () => {
  return (
    <Suspense fallback={<Preloader />}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/e-store/*" element={<StorePage />} />
        <Route path="/:itemId" element={<DetailsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </Suspense>
  );
};

export default Routing;
