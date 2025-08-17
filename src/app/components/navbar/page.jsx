"use client";
import React, { useEffect, useState } from "react";
import { FaShopify } from "react-icons/fa";
import { PiDropboxLogo } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import NavbarBottom from "../NavbarBottom/page";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {
  const productData = useSelector((state) => state.shopper.productData);
  const [totalAmt, setTotalAmt] = useState("");

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  });

  return (
    <div className="w-full bg-[#0071dc] text-white sticky top-0 z-50">
      {/* top navbar */}
      <div className="max-w-[1520px] mx-auto h-20 px-4 flex items-center justify-between gap-2">
        {/* logo */}
        <Link href="/">
          <div className="navbarHover">
            <FaShopify className="text-4xl" />
          </div>
        </Link>

        {/* department */}
        <div className="navbarHover">
          <PiDropboxLogo />
          <p>Department</p>
        </div>

        {/* services */}
        <div className="navbarHover">
          <PiDropboxLogo />
          <p>Services</p>
        </div>

        {/* search bar section */}
        <div className="h-10 flex flex-1 relative">
          <input
            type="text"
            placeholder="Search everything"
            className="h-full w-full rounded-full px-4 text-black text-base outline-none border-[1px] border-transparent focus-visible:border-black duration-200 bg-white"
          />
          <span className="w-8 h-8 rounded-full flex items-center justify-center text-black absolute right-1 top-1 text-xl bg-[#ffc220] ">
            <IoSearchOutline />
          </span>
        </div>

        {/* my items */}
        <div className="navbarHover">
          <AiOutlineHeart />
          <div>
            <p className="text-xs">Recorder</p>
            <h2 className="text-base font-semibold -mt-1">My Items</h2>
          </div>
        </div>

        {/* signin account */}
        <div className="navbarHover">
          <AiOutlineUser />
          <div>
            <p className="text-xs">Sign In</p>
            <h2 className="text-base font-semibold -mt-1">Account</h2>
          </div>
        </div>

        {/* cart */}
        <Link href="/cart">
          <div className=" flex flex-col justify-center items-center gap-2 h-12 px-5 rounded-full bg-transparent duration-300 relative hover:bg-[#0049aa]">
            <BsCart2 className="text-2xl" />
            <p className="text-[10px] -mt-2">${totalAmt} </p>
            <span className="absolute w-4 h-4 bg-[#ffc220] text-black rounded-full flex items-center justify-center text-xs top-0 right-4">
              {productData.length > 0 ? productData.length : 0}
            </span>
          </div>
        </Link>
      </div>

      {/* bottom navbar */}
      <NavbarBottom />
    </div>
  );
};

export default Navbar;
