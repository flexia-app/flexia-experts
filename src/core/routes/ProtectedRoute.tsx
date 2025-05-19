import type { JSX } from "react";
import { Navigate, Outlet } from "react-router-dom";
// import { getDecryptedItem } from "@/core/utils/storageUtils";

const ProtectedRoute = (): JSX.Element => {
  const token = "TODO"; // TODO: getDecryptedItem<string>("token");

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
