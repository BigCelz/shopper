"use client";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { BsInfoCircle, BsStarFill } from "react-icons/bs";
import { GiCargoShip } from "react-icons/gi";
import { MdLocalShipping } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/shopperSlice";

const ProductDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        quantity: 1,
      })
    );
  };

  const fetchProduct = async () => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product");
    return res.json();
  };

  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: fetchProduct,
  });

  if (isLoading) return <p>Loading product...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="w-full bg-white min-h-screen max-w-4xl mx-auto pt-16 flex">
      {/* right side */}
      <div className="w-2/3 h-full fleex items-center justify-center overflow-hidden relative">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="object-contain transition-origin-top left cursor-move duration-500 w-[50%]"
        />
      </div>

      {/* left side */}
      <div className="w-1/3 h-full flex flex-col gap-2">
        <p className="p-2 text-[#004f9a] text-sm font-semibold border border-gray-400 rounded-md">
          500+ bought yesterday
        </p>
        <div className="px-2 py-4 border border-gray-400 rounded-md gap-6 flex flex-col ">
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <button className="px-2 py-[1px] text-[#004f9a] text-sm border-[1px] border-[#004f9a] rounded-sm">
                Best Seller
              </button>

              <button className="px-2 py-[1px] bg-red-500 text-sm border-[1px] border-red-500 text-white rounded-sm">
                Best Seller
              </button>
            </div>
          </div>
        </div>

        {/* product info */}
        <div>
          <p className="text-xl font-semibold text-black">{product.title}</p>
          <p className="text-base text-zinc-500 mt-1">{product.description}</p>

          <div className=" flex gap-2 items-center text-xs mt-2">
            <div className="flex gap-1">
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
              <BsStarFill className="text-yellow-500" />
            </div>
          </div>

          <div className="mt-2">
            <p className="text-2xl font-semibold text-[#298703]">
              ${product.price}
            </p>
          </div>

          <div className="text-sm text-black flex flex-col gap-1">
            <p>
              <span className="font-semibold">$18/month</span>
              <span className="font-bold"> with affirm</span>
              <span className="underline underline-offset-2"> learn more</span>
            </p>

            <p className="text-xs text-zinc-500 flex items-center gap-1">
              Price when purchased online
              <BsInfoCircle />
            </p>
          </div>

          <div className="border-b-[1px] border-b-zinc-300 pb-4 mt-3">
            <button onClick={handleAddToCart} className="w-32 h-10 bg-blue-500 text-white rounded-sm hover:bg-[#004f9a] duration-300">
              Add to cart
            </button>
          </div>

          {/* delivery option */}
          <div className="mt-2">
            <p className="text-base font-semibold">
              How do you want your item?
            </p>
            <div className="w-full grid grid-cols-3 gap-4 text-xs mt-2">
              <div className="w-full border border-zinc-400 rounded-mf flex flex-col items-center justify-center p-2">
                <GiCargoShip className="text-3xl" />
                <p>Shipping</p>
              </div>

              <div className="w-full border border-zinc-400 rounded-mf flex flex-col items-center justify-center p-2">
                <MdDeliveryDining className="text-3xl" />
                <p>Pick up</p>
              </div>

              <div className="w-full border border-zinc-400 rounded-mf flex flex-col items-center justify-center p-2">
                <MdLocalShipping className="text-3xl" />
                <p>Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
