// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const isAuthenticated = false;

  return (
    <BrowserRouter>
      <div className="">
        <div className="">
          <nav className="">
            <ul className=" flex gap-3">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/blog/1">Blog Post 1</Link>
              </li>
              <li>
                <Link to="/blog/2">Blog Post 2</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/profile/*"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
