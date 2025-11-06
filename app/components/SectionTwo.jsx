import React from "react";
import { Button, Product } from ".";
import Link from "next/link";

const SectionTwo = ({ data }) => {
  return (
    <div className=" sm:h-[622px] py-20 sm:py-0  sm:px-[132px] flex flex-col sm:flex-row w-screen">
      <div className=" sm:w-[243px] px-5 sm:px-0 w-full flex ">
        <div className="items-center sm:items-start flex flex-col">
          <p className="font-bold leading-none text-black text-[35px] text-center sm:text-left pb-5">
            Crafted with excellent material.
          </p>
          <p
            className="text-[15px] leading-normal text-center sm:text-left"
            style={{ paddingBottom: 40 }}
          >
            These bags are specially made and crafted with quality materials and
            special made for you, don't get it twisted.
          </p>
          <Link href={"/product/allproducts"}>
            <Button
              title={"Explore"}
              backgound={"bg-black"}
              textcolor={"text-white"}
            />
          </Link>
        </div>
      </div>

      <Product data={data}></Product>
    </div>
  );
};

export default SectionTwo;
