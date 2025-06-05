import { useSelector } from "react-redux";
import type { RootState } from "@/store";
import { Navigate, Outlet } from "react-router-dom";
import type { JSX } from "react";

const ProtectedRoute = (): JSX.Element => {
  const token = useSelector((state: RootState) => state.auth.token);

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
