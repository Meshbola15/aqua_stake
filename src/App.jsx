import { useEffect } from "react";
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

  const checkRoute = () => {
    if (location.pathname !== "/") {
      navigator("/")
      const expectedRoute = location.pathname.slice(1)
      const timer = setTimeout(() => {
        navigator(expectedRoute)
      }, 20);
      return () => clearTimeout(timer);
    }
  }

  useEffect(() => {
    checkRoute()
  }, []);

  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<Home />} children />
      <Route path="/stake/*" element={<StakeHome />} />
    </Routes>
  );
}

export default App;
