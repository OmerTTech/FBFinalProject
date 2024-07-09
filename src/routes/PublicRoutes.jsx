import React from "react";
import PublicLayout from "../layout/PublicLayout";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const PublicRoutes = () => {
  return (
    <PublicLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </PublicLayout>
  );
};

export default PublicRoutes;
