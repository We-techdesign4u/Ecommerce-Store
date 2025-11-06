"use client";
import React from "react";
import Link from "next/link";
import {
  AiOutlineShopping,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
import { useState } from "react";

import { Cart, ShowCart } from "./";
import { useStateContext } from "../context/StateContextProvider";

const Navbar = () => {
  const { totalQuantities, setIsShown } = useStateContext();
  const [shownMenu, setShownMenu] = useState(false);
  return (
    <div className="block w-screen fixed z-20">
      <div className=" bg-[#3b5d4f] fixed z-20 px-5 sm:px-0 justify-between h-[60px] w-screen flex flex-row-reverse sm:flex-row item-center sm:mr-[150px]">
        <p className="logo text-[18px] sm:pl-[132px]">
          <Link href="/">MY STORE</Link>
        </p>
        <div className="hidden sm:flex w-[500px] justify-between items-center p-0 ">
          <ul className=" hover:*:border-b-yellow-400 *:border-b-[3px] *:border-b-transparent *:pb-[6px] *:hover:border-b-[3px] flex text-[13px] text-white font-medium justify-between w-[350px]">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href="/product/allproducts">Products</Link>
            </li>
            <li>
              <Link href="/AboutUs">About Us</Link>
            </li>
            <li>
              <Link href="/ContactUs">Contact Us</Link>
            </li>
          </ul>

          <div className="pr-[30px] ">
            <button
              type="button"
              className="cart-icon h-[40px] *:text-white cursor-pointer relative transition transform duration-500 hover:scale-110"
              onClick={() => setIsShown(true)}
            >
              <AiOutlineShoppingCart className="text-[25px]" />
              <span className="cart-item-qty">{totalQuantities}</span>
            </button>
          </div>
        </div>
        <div className="sm:hidden block">
          <div className=" ">
            {shownMenu ? (
              <div>
                <AiOutlineMenuUnfold
                  className="text-white"
                  size={25}
                  onClick={() => setShownMenu(!shownMenu)}
                ></AiOutlineMenuUnfold>
              </div>
            ) : (
              <div>
                <AiOutlineMenuFold
                  className="text-white"
                  onClick={() => setShownMenu(!shownMenu)}
                  size={25}
                ></AiOutlineMenuFold>
              </div>
            )}
          </div>
          {/**here it was */}
        </div>
        <div className=" fixed bottom-10 shadow-md sm:hidden flex justify-center items-center w-[60px] h-[60px]  rounded-full bg-primary-dark  ">
          <button
            type="button"
            className=" h-[40px] *:text-white cursor-pointer relative transition transform duration-500 hover:scale-110"
            onClick={() => setIsShown(true)}
          >
            <AiOutlineShoppingCart className="text-[25px]" />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>
        </div>
      </div>
      <div
        className={
          shownMenu
            ? "sm:hidden absolute flex bg-Primary-light  -top-100px w-full transition duration-500 ease-in-out transform translate-y-[60px]"
            : "sm:hidden absolute flex bg-Primary-light  w-full transition duration-500 ease-in-out transform -translate-y-[200px]"
        }
      >
        <ul className="pl-2 *:pl-3  py-3 h-[150px] block space-y-2 text-white">
          <li>
            <Link onClick={() => setShownMenu(!shownMenu)} href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setShownMenu(!shownMenu)} href="/AboutUs">
              About Us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setShownMenu(!shownMenu)}
              href={"/product/allproducts"}
            >
              Products
            </Link>
          </li>
          <li>
            <Link onClick={() => setShownMenu(!shownMenu)} href="/ContactUs">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      <Cart />
    </div>
  );
};

export default Navbar;
