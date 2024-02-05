import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { CustomSkeleton } from "../components/CustomSkeleton/CustomSkeleton";
const MainPage = React.lazy(() => import("../pages/MainPage/MainPage"));
const StorePage = React.lazy(() => import("../pages/StorePage/StorePage"));
const NewsPage = React.lazy(() => import("../pages/NewsPage/NewsPage"));
const ClientsPage = React.lazy(
  () => import("../pages/ClientsPage/ClientsPage")
);

export const Routing: React.FC = () => {
  return (
    <Suspense fallback={<CustomSkeleton />}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<MainPage />} />
        <Route path="/e-store/*" element={<StorePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/clients" element={<ClientsPage />} />
      </Routes>
    </Suspense>
  );
};
