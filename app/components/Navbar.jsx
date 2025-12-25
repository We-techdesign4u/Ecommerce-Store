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
  const { isShown } = useStateContext();
  return (
    <div className=" sticky block w-screen    z-20">
      <div className="px-5 lg:px-[150px] flex flex-col max-w-[2500px] w-full fixed h-auto top-12">
        {/**desktop menu */}
        <div className=" border-gray-400 bg-[#fafafaa5] shadow-inner shadow-[#9e9e9e8f] border-[1px] backdrop-blur-[3px]  z-20 pl-[15px] pr-[4px] rounded-[15px]  justify-between w-full flex flex-row-reverse lg:flex-row item-center">
          <Link href="/">
            <img className="h-[55px] w-auto" src="images/baggy.png" />
          </Link>

          <div className="hidden gap-[10px] lg:flex justify-between items-center ">
            <ul className=" gap-[22px] px-[19px] hover:*:bg-white *:px-[15px] *:py-[8px] *:leading-tight *:rounded-[8px]  flex text-[19px] text-black font-bold ">
              <li>
                <Link href={"/"}>HOME</Link>
              </li>
              <li>
                <Link href="/product/allproducts">PRODUCTS</Link>
              </li>
              <li>
                <Link href="/AboutUs">ABOUT US</Link>
              </li>
              <li>
                <Link href="/ContactUs">CONTACT US</Link>
              </li>
            </ul>

            <button
              type="button"
              className=" h-[37px] w-[54px] pt-[9px] shadow-[inset_0px_0px_5px_0px_white,0_2px_6px_1px_rgba(171,245,118,0.75)] rounded-[10px] justify-center items-center flex bg-[#abf576] text-white cursor-pointer relative transition transform duration-500 hover:scale-110"
              onClick={() => setIsShown(true)}
            >
              <AiOutlineShoppingCart size={23} className=" text-gray-900" />
              <span className="absolute text-[12px] text-center  w-[20px] h-[20px] flex justify-center items-center bg-red-800 top-[3px] right-0 rounded-full">
                {totalQuantities}
              </span>
            </button>
          </div>
          {/**mobile menu icon */}
          <div className="lg:hidden block">
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
          {/**mobile shoppingcaricon */}
          <div className=" fixed bottom-10 shadow-md lg:hidden flex justify-center items-center w-[60px] h-[60px]  rounded-full bg-primary-dark  ">
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
        {/**mobile menu */}
        <div
          className={
            shownMenu
              ? "lg:hidden absolute flex bg-Primary-light  -top-100px w-full transition duration-500 ease-in-out transform translate-y-[60px]"
              : "lg:hidden absolute flex bg-Primary-light  w-full transition duration-500 ease-in-out transform -translate-y-[200px]"
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
      <div
        className={
          isShown
            ? " block w-screen h-screen -z-10 absolute bg-black opacity-45"
            : " hidden"
        }
      ></div>
    </div>
  );
};

export default Navbar;
