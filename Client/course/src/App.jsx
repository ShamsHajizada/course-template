import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import {Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AddProductPage from "./Pages/AddProductPage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import NotFoundPage from "./Pages/NotFoundPage";
import Header from "./Layouts/Header";

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
