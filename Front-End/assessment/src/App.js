import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Outlet,
  BrowserRouter as Router,
  useNavigate,
} from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Dashboard from "./pages/Dashboard/Dashboard";
import products from "./pages/products/products";
import productDetail from "./pages/productDetail/productDetail";
import Login from "./pages/Login/login";
import ProtectedRoute from "../ProtectedRoute";
import Navbar from "./components/Navbar/Navbar"

const App = () => {
  const Layout = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const authToken = localStorage.getItem("token");
      if (!authToken) {
        navigate("/login ");
      }
    }, [navigate]);

    return (
      <>
            <Navbar />
            <Outlet />
      </>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/productDetail" element={<productDetail />} />
          <Route path="/products" element={<products />} />
          <Route path="/Dashboard" element={ <ProtectedRoute element={<Dashboard />} role="creator" />}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
