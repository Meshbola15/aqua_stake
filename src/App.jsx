import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/home";
import StakeHome from "./pages/stake";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  return <div>Redirecting....</div>;
};

function App() {
  const navigator = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkRoute = () => {
      if (location.pathname !== "/") {
        const expectedRoute = location.pathname.slice(1);
        const timer = setTimeout(() => {
          navigator(expectedRoute);
        }, 20);
        return () => clearTimeout(timer);
      }
    };

    const cleanup = checkRoute();
    return cleanup; 
  }, [location.pathname, navigator]);

  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<Home />} />
      <Route path="/stake/*" element={<StakeHome />} />
    </Routes>
  );
}

export default App;
