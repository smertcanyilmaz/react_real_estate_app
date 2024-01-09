import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Register from "../pages/Auth/Register/Register";
import Protected from "../pages/Protected/Protected";
import CreatePost from "../pages/CreatePost/CreatePost";
import Preview from "../pages/Preview/Preview";
import Login from "../pages/Auth/Login/Login";
import MyProfile from "../pages/Profile/MyProfile/MyProfile";
import MyPosts from "../pages/Profile/My Posts/MyPosts";
import ActivePosts from "../pages/Profile/ActivePosts/ActivePosts";
import PasivePosts from "../pages/Profile/PasivePosts/PasivePosts";
import IncompletePosts from "../pages/Profile/IncompletePosts/IncompletePosts";
import Favorites from "../pages/Profile/Favorites/Favorites";
import Home from "../pages/Home/Home";
import { AuthContext } from "../Context/AuthContext";
import { CreatePostContext } from "../Context/CreatePostContext";
import { FilterContext } from "../Context/FilterContext";
import ProfileContext from "../Context/ProfileContext";
import MobilProfileMenu from "../pages/Profile/MobilProfileMenu/MobilProfileMenu";

const Estates = React.lazy(() => import("../pages/Estates/Estates"));
const Estate = React.lazy(() => import("../pages/Estate/Estate"));
const Membership = React.lazy(() => import("../pages/Membership/Membership"));

const RouteLayout = () => {
  const [unAuthNavbar, setUnAuthNavbar] = useState(false);
  const [authMenuChecker, setAuthMenuChecker] = useState(false);

  return (
    <AuthContext>
      <>
        <BrowserRouter>
          <CreatePostContext>
            <FilterContext>
              <ProfileContext>
                <Suspense
                  fallback={
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="inline-block h-10 w-10 animate-spin rounded-full border-2 border-solid border-gray-800 border-r-transparent align-[-0.125em] "></div>
                    </div>
                  }
                >
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <Layout
                          unAuthNavbar={unAuthNavbar}
                          authMenuChecker={authMenuChecker}
                          setAuthMenuChecker={setAuthMenuChecker}
                        />
                      }
                    >
                      <Route
                        index
                        element={<Home setUnAuthNavbar={setUnAuthNavbar} />}
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
                        element={
                          <Register
                            setUnAuthNavbar={setUnAuthNavbar}
                            authMenuChecker={authMenuChecker}
                            setAuthMenuChecker={setAuthMenuChecker}
                          />
                        }
                      />
                      <Route
                        path="login"
                        element={
                          <Login
                            setUnAuthNavbar={setUnAuthNavbar}
                            authMenuChecker={authMenuChecker}
                            setAuthMenuChecker={setAuthMenuChecker}
                          />
                        }
                      />
                      <Route
                        path="membership"
                        element={
                          <Membership setUnAuthNavbar={setUnAuthNavbar} />
                        }
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
                      <Route
                        path="profilemenu"
                        element={
                          <Protected>
                            <MobilProfileMenu
                              setUnAuthNavbar={setUnAuthNavbar}
                            />
                          </Protected>
                        }
                      />
                    </Route>
                  </Routes>
                </Suspense>
              </ProfileContext>
            </FilterContext>
          </CreatePostContext>
        </BrowserRouter>
      </>
    </AuthContext>
  );
};

export default RouteLayout;
