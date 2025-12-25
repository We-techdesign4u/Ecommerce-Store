"use client";
import React from "react";
import Link from "next/link";
import { urlFor } from "../../sanity/lib/client";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useStateContext } from "../context/StateContextProvider";
import { useRef } from "react";

const ProductDesc = (props) => {
  const { handleScrollLeft, handleScrollRight } = useStateContext();
  const data = props.data;
  const scrollableRecProdRef = useRef(null);

  return (
    <section className="w-screen bg-[#d7d7d7] px-8 sm:px-[132px] py-10">
      <div className="flex w-full flex-row sm:w-[1250px] relative">
        <div className="  absolute z-10  top-[40%] -ml-[20px] ">
          <span
            className=" hover:scale-110 ease-in-out duration-400 transition transform cursor-pointer inline-flex sm:h-[50px] sm:w-[50px] h-[40px] w-[40px] items-center justify-center bg-white rounded-full shadow-md"
            onClick={() => handleScrollLeft(scrollableRecProdRef)}
          >
            <AiOutlineLeft />
          </span>
        </div>
        <div
          className=" flex flex-row min-w-full sm:w-[1240px] overflow-x-scroll scroll-smooth "
          ref={scrollableRecProdRef}
        >
          {data.products.map((product) => (
            <div className="" key={product._id}>
              <Link className="" href={`/product/${product.slug.current}`}>
                <div className="hover:bg-[#dce5e4] h-[170px] flex rounded-[10px] p-[20px]">
                  <img
                    className=" h-[140px] object-cover"
                    src={urlFor(product.image && product.image[0])}
                  />
                  <div className="h-auto  w-[280px] sm:mr-[10px] ">
                    <p className=" font-bold">{product.name}</p>
                    <p></p>
                    <p className=" leading-[13px] text-[12px] pb-[10px]">
                      {product.desc}
                    </p>
                    <p></p>

                    <p>Read More</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className=" items-center top-[40%] absolute z-10 right-0 -mr-[20px]  justify-center">
          <span
            className="hover:scale-110 ease-in-out duration-400 transition transform cursor-pointer inline-flex sm:h-[50px] sm:w-[50px] h-[40px] w-[40px] items-center justify-center bg-white rounded-full shadow-md"
            onClick={() => handleScrollRight(scrollableRecProdRef)}
          >
            <AiOutlineRight />
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProductDesc;
