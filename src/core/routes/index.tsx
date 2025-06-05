import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import NotFoundPage from "./NotFoundPage";
import { LoginPage } from "@/auth/pages/LoginPage";
import { ExercisesPage } from "@/exercises/pages/ExercisesPage.tsx";
import { FaSpinner } from "react-icons/fa";
import { useSelector } from 'react-redux';
import type { RootState } from '@/store';

export const CoreRoutes: React.FC = () => {
const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (isAuthenticated === null) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <FaSpinner size={72} className="animate-spin text-green" />
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/exercises" replace /> : <Navigate to="/login" replace />}
        />

        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/exercises" replace /> : <LoginPage />
          }
        />

        <Route element={<ProtectedRoute />}>
          <Route path="/exercises" element={<ExercisesPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

