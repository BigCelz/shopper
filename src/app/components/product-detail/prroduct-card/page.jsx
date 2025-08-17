"use client";

import Image from "next/image";
import { BsStarFill } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../../redux/shopperSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        quantity: 1, 
      })
    );
  };

  return (
    <div className="border border-gray-300 bg-white rounded-lg shadow-md p-4 flex flex-col">
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="object-contain h-40 w-full"
      />
      <div className="px-2 py-4 flex flex-col justify-center">
        <div className="flex justify-between py-2">
          <button onClick={handleAddToCart} className="w-20 h-9 whitespace-nowrap text-sm bg-[#0071dc] text-white rounded-full flex gap-1 items-center justify-center hover:bg-[#004f9a] cursor-pointer duration-300">
            <span>
              {" "}
              <GoPlus />{" "}
            </span>
            Add
          </button>

          <Link href={`/product-detailss/${product.id}`}>
            <button className="w-20 h-9 bg-gray-200 text-sm text-blue-600 rounded-full flex gap-1 items-center justify-center hover:bg-gray-400 cursor-pointer duration-300">
              Details
            </button>
          </Link>
        </div>

        {/* description */}
        <div>
          <p className="text-green-700 font-semibold"> Now ${product.price} </p>
        </div>
        <p className="text-lg font-semibold py-2">
          {product.title.substring(0, 25)}
        </p>
        <p>{product.description.substring(0, 60)}</p>

        <div className="flex items-center text-sm mt-2">
          <div className="flex items-center text-sm gap-1">
            <BsStarFill className="text-yellow-500" />
            <BsStarFill className="text-yellow-500" />
            <BsStarFill className="text-yellow-500" />
            <BsStarFill className="text-yellow-500" />
            <BsStarFill className="text-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
