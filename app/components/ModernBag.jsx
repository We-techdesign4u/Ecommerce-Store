"use client";
import React from "react";
import {
  AiOutlineCar,
  AiOutlineCheck,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

const ModernBag = () => {
  const imageVariants = {
    hidden: {
      x: -120,
      opacity: 1,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section className=" w-screen  ">
      <div className="flex-col flex w-full lg:flex-row h-fit relative items-center justify-between py-[60px] md:px-[80px] lg:py-[180px]  px-5 lg:px-[180px]">
        <div
          ref={ref}
          className="flex  justify-center items-center  w-full relative  h-auto"
        >
          <p className="lg:text-[165px] text-[100px] -z-10 -rotate-90 leading-tight font-bold absolute -left-[80px] text-black">
            GUCCI
          </p>

          <motion.img
            alt="Bag"
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className=" object-cover  w-[320px] lg:h-[585px] lg:w-[512px] md:w-[450px] object-center"
            src="/images/bag4.png"
          />
        </div>

        <div className="*:text-center space-y-6 w-full lg:w-[410px]  lg:*:text-left">
          <div className="space-y-[7px]">
            <p className=" leading-tight font-bold text-[35px] text-black">
              Eco-Friendly Bags
            </p>
            <p className="text-[18px] leading-tight font-bold text-black">
              $200.99
            </p>
          </div>
          <div className="space-y-[7px]">
            <p className="text-[18px] font-bold text-black">Description:</p>
            <p className="text-[12px] text-gray-600 leading-normal">
              These bags are specially made and crafted with quality materials
              and special made for you, don't get it twistedquality materials
              and special made for you, don't get it twisted made and crafted
              with quality materials and special made for you,.
            </p>
          </div>

          <div className="lg:w-[350px] flex flex-col justify-center lg:items-start items-center">
            <p className="text-[18px] text-[#757575] leading-tight py-2">
              Choose a color
            </p>
            <div className=" flex gap-5">
              <span className="w-[24px] h-[24px] bg-green-500 rounded-lg block"></span>
              <span className="p-[2px] border-[1px] border-emerald-800 rounded-lg block">
                <span className="w-[24px] justify-items-center block items-center h-[24px] bg-emerald-800 rounded-lg ">
                  {/* <AiOutlineCheck className="m-auto" /> */}
                </span>
              </span>
              <span className="w-[24px] h-[24px] bg-violet-600 rounded-lg block"></span>
              <span className="w-[24px] h-[24px] bg-red-700 rounded-lg block"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernBag;
