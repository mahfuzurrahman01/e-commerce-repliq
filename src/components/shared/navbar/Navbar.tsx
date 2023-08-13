/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { HiXMark } from "react-icons/hi2";
import React, { useContext, useEffect, useState } from "react";

import Image from "next/image";
import logo from "../../../../public/logo/logo.png";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  let isLoggedIn;
  if (typeof window !== "undefined") {
    // Access localStorage here
    isLoggedIn = localStorage.getItem("isLoggedIn");
  }

  // on log out button click
  const logOutHandle = () => {
    localStorage.clear();
  };
  return (
    <div className=" flex justify-between md:items-center items-start lg:py-3 py-2  relative">
      {/* logo div  */}
      <Link href="/">
        <div className="lg:block hidden">
          <Image src={logo} alt="logo" width={100} height={90} />
        </div>
        <div className="lg:hidden flex flex-col justify-start items-center">
          <p className="text-red-900 font-bold">REPLIQ</p>
          <small className="text-xs">online shop</small>
        </div>
      </Link>
      {/* navbar tab div for desktop */}
      <div className="lg:flex hidden items-center gap-5">
        <Link
          className="hover:text-red-900 text-gray-500 duration-300 hover:font-semibold"
          href="/"
        >
          Home
        </Link>

        <Link
          className="hover:text-red-900 text-gray-500 duration-300 hover:font-semibold"
          href="/products"
        >
          Products
        </Link>

        <Link
          className="hover:text-red-900 text-gray-500 duration-300 hover:font-semibold"
          href="/admin"
        >
          Admin Dashboard
        </Link>
        <Link
          className="hover:text-red-900 text-gray-500 duration-300 hover:font-semibold"
          href="/cart"
        >
          <AiOutlineShoppingCart className="w-7 h-7" />
        </Link>
        {isLoggedIn === "true" ? (
          <button
            className="hover:text-red-900 bg-red-900 px-2 py-1 hover:bg-white text-gray-200 duration-300 hover:font-semibold"
            onClick={logOutHandle}
          >
            Logout
          </button>
        ) : (
          <Link
            className="hover:text-red-900 bg-red-900 px-2 py-1 hover:bg-white text-gray-200 duration-300 hover:font-semibold"
            href="/auth/register"
          >
            Register
          </Link>
        )}
      </div>
      {/* navbar tab div for mobile */}
      {!menuToggle ? (
        <AiOutlineMenu
          onClick={() => setMenuToggle(true)}
          className="text-4xl text-gray-500 mr-1 font-bold mt-[5px] lg:hidden block"
        />
      ) : (
        <HiXMark
          onClick={() => setMenuToggle(false)}
          className="text-4xl text-gray-500 mr-1 font-bold mt-[5px] lg:hidden block"
        />
      )}

      <div
        className={`bg-red-900 w-full absolute p-4 m-0 top-20 flex lg:hidden flex-col gap-4 ${
          menuToggle ? "translate-y-[0%]" : "translate-y-[-140%]"
        } duration-500`}
      >
        <Link
          href="/"
          className="border-b p-1 text-center hover:bg-gray-300 hover:text-red-900 hover:border-none rounded-md duration-300"
          onClick={() => setMenuToggle(false)}
        >
          Home
        </Link>
        <Link
          href="/products"
          className="border-b p-1 text-center hover:bg-gray-300 hover:text-red-900 hover:border-none rounded-md duration-300"
          onClick={() => setMenuToggle(false)}
        >
          Products
        </Link>
        <Link
          href="/dashboard"
          className="border-b p-1 text-center hover:bg-gray-300 hover:text-red-900 hover:border-none rounded-md duration-300"
          onClick={() => setMenuToggle(false)}
        >
          Admin dashboard
        </Link>
        <Link
          href="/auth/register"
          className="border-b p-1 text-center hover:bg-gray-300 hover:text-red-900 hover:border-none rounded-md duration-300"
          onClick={() => setMenuToggle(false)}
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
