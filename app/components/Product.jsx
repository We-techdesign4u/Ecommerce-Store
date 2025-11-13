"use client";
// "use server";
import { useEffect } from "react";

import React, { useRef } from "react";
import Link from "next/link";
import { urlFor } from "../../sanity/lib/client";
import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useStateContext } from "../context/StateContextProvider";

const Product = (props) => {
  const { addToCart, handleScrollLeft, handleScrollRight } = useStateContext();
  const data = props.data;

  const scrollableProdRef = useRef(null);

  // console.log("data", data);<div className=" w-screen py-10 sm:py-0 sm:w-[960px]">

  return (
    <div className="mt-10 sm:mt-0 w-screen ml-10 pr-10 sm:pr-0 sm:ml-5 sm:w-[960px] sm:h-[450px] relative">
      <div className="  absolute z-10  top-[50%] -ml-5  ">
        <span
          className=" hover:scale-110 ease-in-out duration-400 transition transform cursor-pointer inline-flex h-[50px] w-[50px] items-center justify-center bg-white rounded-full shadow-md"
          onClick={() => handleScrollLeft(scrollableProdRef)}
        >
          <AiOutlineLeft />
        </span>
      </div>

      <div
        className="flex  w-full overflow-x-scroll scroll-smooth"
        ref={scrollableProdRef}
      >
        {data.products.map((product) => (
          <div
            className="group relative w-[290px] px-[10px] py-[0px] flex flex-col sm:h-[420px] items-center"
            key={product._id}
          >
            <Link
              className="relative sm:mt-[160px]"
              href={`/product/${product.slug.current}`}
            >
              <div className=" sm:group-hover:bg-[#dce5e4] w-[290px] sm:h-[243px]  rounded-[10px] bg-none flex flex-col items-center relative ">
                <img
                  className=" hover:scale-110 object-cover sm:h-[270px] h-[280px]  w-[75%] sm:-mt-[142px] overflow-hidden object-center relative sm:mb-[10px] transition transform duration-300 ease-in-out"
                  src={urlFor(product.image && product.image[0])}
                  alt={"product._type"}
                />
                <p className="sm:mt-[30px] text-[19px] mt-0">{product.name}</p>
                <p className="text-[15px] pt-2 ">${product.price}.00</p>
              </div>
            </Link>
            <button
              onClick={() => addToCart(product, 1)}
              className="group-hover:flex top-[50px] sm:left-[43%] left-10 sm:top-[387px] hover:scale-110 w-[30px] h-[30px] absolute z-10 rounded-full bg-black flex sm:hidden text-white justify-center items-center cursor-pointer transition transform duration-300 ease-in-out shadow-sm"
            >
              <AiOutlineShoppingCart />
            </button>
          </div>
        ))}
      </div>
      <div className=" items-center top-[50%] absolute z-10 right-0 sm:-mr-6 mr-5 justify-center">
        <span
          className="hover:scale-110 ease-in-out duration-400 transition transform cursor-pointer inline-flex h-[50px] w-[50px] items-center justify-center bg-white rounded-full shadow-md"
          onClick={() => handleScrollRight(scrollableProdRef)}
        >
          <AiOutlineRight />
        </span>
      </div>
    </div>
  );
};

export default Product;
