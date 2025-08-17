import React from "react";
import { LuPackageOpen } from "react-icons/lu";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaPlaceOfWorship } from "react-icons/fa";

const NavbarBottom = () => {
  return (
    <div className="max-w-[1520px] mx-auto py-3 px-6 flex items-center justify-between">
      {/* 1st section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <LuPackageOpen className="text-xl" />
          <p className="text-sm font-semibold">How do you want your item?</p>
          <FiChevronDown />
          <span className="w-[1px] h-4 bg-white ml-2 inline-flex"></span>
        </div>

        <div className="flex items-center gap-2">
          <MdOutlineLocationOn />
          <p className="text-sm text-zinc-100">Saccramento, 95829</p>
          <FaPlaceOfWorship />
          <p className="text-sm text-zinc-100">Sacramento supercenter</p>
        </div>
      </div>

      {/* 2nd section */}
      <ul className="flex gap-6 text-sm font-semibold">
        <li className="bottomNavLink">
          Deals
        </li>
        <li className="bottomNavLink">
          New Arrivals
        </li>
        <li className="bottomNavLink">
          Best Sellers
        </li>
        <li className="bottomNavLink">
          Clothing
        </li>
        <li className="bottomNavLink">
          Shoes
        </li>
        <li className="bottomNavLink">
          Accessories
        </li>
        <li className="bottomNavLink">
          Electronics
        </li>
        <li className="bottomNavLink">
          Home & Living
        </li>
        <li className="bottomNavLink">
          Gadgets
        </li>
      </ul>
    </div>
  );
};

export default NavbarBottom;
