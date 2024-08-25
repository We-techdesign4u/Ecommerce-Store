"use client";
import React from "react";
import Link from "next/link";
import {
  AiOutlineShopping,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

import { Cart } from "./";
import { useStateContext } from "../context/StateContextProvider";

const Navbar = () => {
  const { totalQuantities, setIsShown } = useStateContext();

  return (
    <div className="navbar-container">
      <div className="navbar">
        <p className="logo">
          <Link href="/">MY STORE</Link>
        </p>
        <div className="desktopMenu">
          <ul className="desktopMenuText">
            <li>
              <Link href={"/"}>Home</Link>
            </li>

            <li>
              <Link href="/AboutUs">About Us</Link>
            </li>
            <li>
              <Link href="/product/allproducts">Products</Link>
            </li>
            <li>
              <Link href="/ContactUs">Contact Us</Link>
            </li>
          </ul>

          <div className="desktopMenuIcon">
            <button
              type="button"
              className="user-icon"
              onClick={() => setIsShown(false)}
            >
              <AiOutlineUser />
            </button>

            <button
              type="button"
              className="cart-icon"
              onClick={() => setIsShown(true)}
            >
              <AiOutlineShoppingCart />
              <span className="cart-item-qty">{totalQuantities}</span>
            </button>
          </div>
        </div>
      </div>

      <Cart />
    </div>
  );
};

export default Navbar;
