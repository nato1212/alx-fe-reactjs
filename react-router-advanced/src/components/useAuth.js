// src/components/useAuth.js
import { useState, useEffect } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Example of checking if a user is authenticated (e.g., checking localStorage or cookies)
    const user = localStorage.getItem("user"); // Replace with actual auth check
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);

  return { isAuthenticated };
};
