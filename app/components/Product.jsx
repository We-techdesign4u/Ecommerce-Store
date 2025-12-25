"use client";
// "use server";
import { useEffect } from "react";

import React, { useRef } from "react";
import Link from "next/link";
import { urlFor } from "../../sanity/lib/client";
import {
  AiFillStar,
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
    <div className="h-[350px] flex  items-center w-full lg:w-[800px] rounded-[17px] relative bg-[#E3E3E3]">
      <div className="  absolute z-20   top-[50%] -ml-5  ">
        <span
          className=" hover:scale-110 ease-in-out duration-400 transition transform cursor-pointer inline-flex h-[50px] w-[50px] items-center justify-center bg-white rounded-full shadow-md"
          onClick={() => handleScrollLeft(scrollableProdRef)}
        >
          <AiOutlineLeft />
        </span>
      </div>
      <div className="rounded-[20px] overflow-clip h-full relative">
        <div className="absolute left-0  top-0 w-[60px] mask-l-from-60% mask-l-to-98% bg-[#ffffff4c] z-10  h-full"></div>
        <div
          className=" px-[45px] flex space-x-[20px] flex-row lg:w-[800px]  overflow-x-scroll scroll-smooth"
          ref={scrollableProdRef}
        >
          {data.products.map((product) => (
            <div
              className="group relative w-[250px] flex flex-col justify-end h-[320px]"
              key={product._id}
            >
              <Link
                className="sm:group-hover:bg-[#a2fab5] justify-items-center relative px-5 pb-3 bg-[#FAFAFA] w-full  rounded-[10px] block "
                href={`/product/${product.slug.current}`}
              >
                <div className=" absolute -top-[150px] object-center justify-items-center hover:scale-110 object-cover  h-[220px] w-full  overflow-hidden transition transform duration-300 ease-in-out">
                  <img
                    className="absolute w-[190px]  -bottom-[15%] "
                    src={urlFor(product.image && product.image[0])}
                    alt={"product._type"}
                  />
                </div>
                <div className="h-[160px] flex flex-col justify-end">
                  <p className=" text-[14px] font-bold">{product.name}</p>
                  <p className="text-[10px] text-[#909090] text-center leading-tight">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh
                  </p>
                  <div className="flex space-x-3">
                    <p className="text-[13px] ">${product.price}.00</p>

                    <div className="flex space-x-1">
                      <AiFillStar size={16} className=" fill-yellow-400" />
                      <AiFillStar size={16} className=" fill-yellow-400" />
                      <AiFillStar size={16} className=" fill-yellow-400" />
                      <AiFillStar size={16} className=" fill-yellow-400" />
                      <AiFillStar size={16} className=" fill-gray-400" />
                    </div>
                  </div>
                </div>
              </Link>
              {/* <button
                onClick={() => addToCart(product, 1)}
                className="group-hover:flex top-[50px] sm:left-[43%] left-10 lg:top-[300px] hover:scale-110 w-[30px] h-[30px] absolute z-10 rounded-full bg-black flex sm:hidden text-white justify-center items-center cursor-pointer transition transform duration-300 ease-in-out shadow-sm"
              >
                <AiOutlineShoppingCart />
              </button> */}
            </div>
          ))}
        </div>
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
