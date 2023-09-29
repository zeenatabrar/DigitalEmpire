import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import About from "../pages/About";
import Contact from "../pages/Contact";
import Admin from "../pages/Admin";
import PrivateRoute from '../components/PrivateRoute';
import Products from '../pages/Products';
import SingleProductPage from "../pages/SingleProductPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>}></Route>
      <Route path="/products" element={<PrivateRoute><Products /></PrivateRoute>}></Route>
      <Route path="/product/:id" element={<PrivateRoute><SingleProductPage /></PrivateRoute>}></Route>
    </Routes>
  )
}

export default AllRoutes