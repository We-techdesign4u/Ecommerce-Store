import React from "react";
import { Button } from ".";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <div className="w-screen pt-10 pb-20 sm:pb-0  sm:h-[600px] bg-Primary justify-between flex sm:flex-row flex-col-reverse sm:pl-[132px] pl-5 pr-5 sm:pr-0 ">
      <div className=" sm:w-[30%] sm:max-w-[610px] text-center sm:text-left ">
        <p className="text-[40px] text-white leading-none font-bold">
          Mordern Handcrafted Quality Designs.
        </p>
        <p className="text-white pt-10 pb-10 text-[15px]">
          These bags are specially made and crafted with quality materials and
          special made for you, don't get it twisted made and crafted with
          quality materials and special made for you, don't.
        </p>
        <div className="flex w-full sm:justify-start justify-center gap-4">
          <Link href={"/product/allproducts"}>
            <Button
              backgound={"bg-yellow-500"}
              title={"Shop Now"}
              textcolor={"text-black"}
            />
          </Link>
          <Link href={"/product/allproducts"}>
            <Button
              backgound={"bg-transparent"}
              title={"Explore"}
              textcolor={"text-white"}
              border={"border-[2px] border-white"}
            />
          </Link>
        </div>
      </div>
      <div className=" sm:w-[60%] w-full flex items-center justify-end relative object-cover">
        <img className="w-[870px] object-cover" src={"/images/HBIMGDZ.png"} />
      </div>
    </div>
  );
};

export default HeroBanner;
