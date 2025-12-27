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
import { motion } from "motion/react";
import Image from "next/image";
import images from "@/public/constant/images";

const Navbar = () => {
  const { totalQuantities, setIsShown, isShown } = useStateContext();
  const [shownMenu, setShownMenu] = useState(false);

  const menuVariants = {
    closed: {
      height: 0,
      opacity: 0,
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.08,
      },
    },
  };

  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/AboutUs" },
    { label: "Products", href: "/product/allproducts" },
    { label: "Contact Us", href: "/ContactUs" },
  ];
  // 🔹 Item animation variants
  const itemVariants = {
    closed: {
      opacity: 0,
      y: -10,
    },
    open: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <div className=" sticky block w-screen    z-20">
      <div className="px-5 lg:px-[150px] flex flex-col max-w-[2500px] w-full fixed h-auto top-12">
        {/**desktop menu */}
        <div className=" border-gray-400 bg-[#fafafaa5] shadow-inner shadow-[#9e9e9e8f] border-[1px] backdrop-blur-[3px]  z-20 pl-[15px] pr-[4px] rounded-[15px]  w-full ">
          <div className="w-full flex justify-between">
            <Link href="/">
              <Image
                alt="logo"
                className="h-[55px] w-auto"
                src={images.logoblack}
              />
            </Link>
            {/**mobile menu icon */}
            <div className="lg:hidden block">
              <div className=" ">
                {shownMenu ? (
                  <div>
                    <AiOutlineMenuUnfold
                      className="text-white"
                      size={35}
                      onClick={() => setShownMenu(!shownMenu)}
                    ></AiOutlineMenuUnfold>
                  </div>
                ) : (
                  <div>
                    <AiOutlineMenuFold
                      className="text-white"
                      onClick={() => setShownMenu(!shownMenu)}
                      size={35}
                    ></AiOutlineMenuFold>
                  </div>
                )}
              </div>
              {/**here it was */}
            </div>
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
          </div>

          {/**mobile menu */}
          {shownMenu && (
            <motion.div
              key="mobile-menu"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden overflow-hidden flex pt-5
                          text-[13px]
                         text-black  font-semibold"
            >
              <ul className="  space-y-3 pb-3">
                {links.map((item) => (
                  <motion.li key={item.label} variants={itemVariants}>
                    <a
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block  text-left py-1 "
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
        {/**mobile shoppingcaricon */}
        <motion.div
          drag
          // dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragMomentum={false}
          className=" fixed bottom-10 right-10 cursor-grab shadow-md lg:hidden flex justify-center items-center w-[60px] h-[60px]  rounded-full bg-primary-dark  "
        >
          <button
            type="button"
            className=" h-[40px] *:text-white  relative"
            onClick={() => setIsShown(true)}
          >
            <AiOutlineShoppingCart className="text-[25px]" />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>
        </motion.div>
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
