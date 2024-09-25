import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signin, Signup, Home, Profile, Posts } from "./pages";
import { ProductList, ProductCard } from "./components";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product-card" element={<ProductCard />} />
      </Routes>
    </BrowserRouter>
  );
};
