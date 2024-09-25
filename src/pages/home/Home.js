import React from "react";
import { Footer, Header, ProductCard, ProductList } from "../../components";
import { products } from "../../data";

export const Home = () => {
  return (
    <div>
      <Header />
      <ProductCard product={products} />
      <Footer />
    </div>
  );
};
