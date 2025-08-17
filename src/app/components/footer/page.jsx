import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#004f9a] text-white pb-6 pt-4">
      <div className=" mx-auto">
        <ul className="w-full flex flex-wrap gap-1 justify-center text-sm text-zinc-300">
          <li className="hover:text-white duration-200 cursor-pointer ml-2">
            All Departments
          </li>
          <li className="hover:text-white duration-200 cursor-pointer ml-2">
            Electronics
          </li>
          <li className="hover:text-white duration-200 cursor-pointer ml-2">
            Fashion
          </li>
          <li className="hover:text-white duration-200 cursor-pointer ml-2">
            Home & Kitchen
          </li>
          <li className="hover:text-white duration-200 cursor-pointer ml-2">
            Beauty & Personal Care
          </li>
          <li className="hover:text-white duration-200 cursor-pointer ml-2">
            Sports & Outdoors
          </li>
          <li className="hover:text-white duration-200 cursor-pointer ml-2">
            Books
          </li>
        </ul>

        <p className="text-sm text-zinc-300 text-center mt-4">© 2025 Celz — All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
