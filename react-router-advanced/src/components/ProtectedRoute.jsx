// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth"; // Assuming you have an authentication hook

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth(); // Get the authentication status

  if (!isAuthenticated) {
    // Redirect unauthenticated users to login page or home page
    return <Navigate to="/login" replace />;
  }

  // Return the protected component if the user is authenticated
  return element;
};

export default ProtectedRoute;
