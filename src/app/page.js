import React from "react";
import Banner from "./components/banner/page";
import Product from "./components/product-detail/product/page";

const Home = async () => {
  return (
    <main className="bg-blue-100">
      <div className="max-w-[1520px] mx-auto bg-white">
        <Banner />
      </div>
      <Product />
    </main>
  );
};

export default Home;
