import "./App.css";
import Home from "./pages/home";
import StakeHome from "./pages/stake";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page/*" element={<StakeHome />} />
    </Routes>
  );
}

export default App;
