import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Estates from "./pages/Estates/Estates";
import { useReducer, useState } from "react";
import Estate from "./pages/Estate/Estate";
import Register from "./pages/Auth/Register/Register";
import Login from "./pages/Auth/Login/Login";
import { AuthContext } from "./Context/AuthContext";
import Protected from "./pages/Protected/Protected";

function App() {
  const ref0 = useReducer(null);
  const [unAuthNavbar, setUnAuthNavbar] = useState(false);

  return (
    <AuthContext>
      <>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Layout ref0={ref0} unAuthNavbar={unAuthNavbar} />}
            >
              <Route
                index
                element={<Home ref0={ref0} setUnAuthNavbar={setUnAuthNavbar} />}
              />
              <Route
                path="estates"
                element={
                  <Protected>
                    <Estates setUnAuthNavbar={setUnAuthNavbar} />
                  </Protected>
                }
              />
              <Route
                path="estates/:id"
                element={<Estate setUnAuthNavbar={setUnAuthNavbar} />}
              />
              <Route
                path="register"
                element={<Register setUnAuthNavbar={setUnAuthNavbar} />}
              />
              <Route
                path="login"
                element={<Login setUnAuthNavbar={setUnAuthNavbar} />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    </AuthContext>
  );
}

export default App;
