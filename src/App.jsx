import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Estates from "./pages/Estates/Estates";
import { useReducer } from "react";

function App() {
  const ref0 = useReducer(null);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout ref0={ref0} />}>
            <Route index element={<Home ref0={ref0} />} />
            <Route path="estates" element={<Estates />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;