import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { CustomSkeleton } from "../components/CustomSkeleton/CustomSkeleton";

const Main = React.lazy(() => import("../pages/Main/Main"));
const Store = React.lazy(() => import("../pages/Store/Store"));
const News = React.lazy(() => import("../pages/News/News"));
const Clients = React.lazy(() => import("../pages/Clients/Clients"));
const Account = React.lazy(() => import("../pages/Account/Account"));

export const Routing: React.FC = () => {
  return (
    <Suspense fallback={<CustomSkeleton />}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Main />} />
        <Route path="/e-store" element={<Store />} />
        <Route path="/news" element={<News />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Suspense>
  );
};
