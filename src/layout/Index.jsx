import { useState, useEffect } from "react";
import { Home } from "./Home/Home";
import { Login } from "./Register/Login";

export const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token === "admin-token") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (username, password) => {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("authToken", "admin-token");
      setIsAuthenticated(true);
      return true;
    } else {
      return false;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };

  return (
    <>
      {isAuthenticated ? (
        <Home onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
};
