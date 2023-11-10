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
import MyProfile from "./pages/Profile/MyProfile/MyProfile";
import MyPosts from "./pages/Profile/My Posts/MyPosts";
import Favorites from "./pages/Profile/Favorites/Favorites";
import ActivePosts from "./pages/Profile/ActivePosts/ActivePosts";
import IncompletePosts from "./pages/Profile/IncompletePosts/IncompletePosts";
import PasivePosts from "./pages/Profile/PasivePosts/PasivePosts";
import CreatePost from "./pages/CreatePost/CreatePost";
import ProfileContext from "./Context/ProfileContext";
import Preview from "./pages/Preview/Preview";
import { CreatePostContext } from "./Context/CreatePostContext";

function App() {
  const ref0 = useReducer(null);
  const [unAuthNavbar, setUnAuthNavbar] = useState(false);

  return (
    <CreatePostContext>
      <AuthContext>
        <>
          <BrowserRouter>
            <ProfileContext>
              <Routes>
                <Route
                  path="/"
                  element={<Layout ref0={ref0} unAuthNavbar={unAuthNavbar} />}
                >
                  <Route
                    index
                    element={
                      <Home ref0={ref0} setUnAuthNavbar={setUnAuthNavbar} />
                    }
                  />
                  <Route
                    path="estates"
                    element={<Estates setUnAuthNavbar={setUnAuthNavbar} />}
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

                  <Route
                    path="create-post"
                    element={
                      <Protected>
                        <CreatePost />
                      </Protected>
                    }
                  />
                  <Route
                    path="preview"
                    element={
                      <Protected>
                        <Preview />
                      </Protected>
                    }
                  />
                  <Route
                    path="myprofile"
                    element={
                      <Protected>
                        <MyProfile />
                      </Protected>
                    }
                  />

                  <Route
                    path="posts"
                    element={
                      <Protected>
                        <MyPosts />
                      </Protected>
                    }
                  />

                  <Route
                    path="posts/actives"
                    element={
                      <Protected>
                        <ActivePosts />
                      </Protected>
                    }
                  />

                  <Route
                    path="posts/pasives"
                    element={
                      <Protected>
                        <PasivePosts />
                      </Protected>
                    }
                  />

                  <Route
                    path="posts/incomplete"
                    element={
                      <Protected>
                        <IncompletePosts />
                      </Protected>
                    }
                  />
                  <Route
                    path="favorites"
                    element={
                      <Protected>
                        <Favorites setUnAuthNavbar={setUnAuthNavbar} />
                      </Protected>
                    }
                  />
                </Route>
              </Routes>
            </ProfileContext>
          </BrowserRouter>
        </>
      </AuthContext>
    </CreatePostContext>
  );
}

export default App;
