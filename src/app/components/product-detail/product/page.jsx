"use client";

import { useQuery } from "@tanstack/react-query";
import ProductCard from "../prroduct-card/page";

const Product = () => {
  const fetchProducts = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2 className="text-center mt-7 font-bold text-3xl underline underline-offset-2">Products</h2>
      <div className="grid grid-cols-4 gap-4 px-4 py-6 w-[90%] mx-auto ">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
