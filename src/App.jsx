import { useEffect } from "react";
import "./App.css";
import Home from "./pages/home";
import StakeHome from "./pages/stake";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  let navigator = useNavigate();
  let location = useLocation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigator("/");
      console.log(location.pathname);
    }, 20);
    return () => clearTimeout(timer);
  }, []);
  return <div>Redirecting....</div>;
};

function App() {
  return (
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<Home />} children />
      <Route path="/stake/*" element={<StakeHome />} />
    </Routes>
  );
}

export default App;
