"use client";
import React from "react";
import { motion } from "motion/react";

const Brands = () => {
  return (
    <div className="w-screen overflow-hidden bg-black py-[10px]">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
      >
        {/* Image 1 */}
        <img
          src="/images/brands.png"
          className=" object-contain invert"
          alt="brands"
        />

        {/* Image 2 (duplicate) */}
        <img
          src="/images/brands.png"
          className=" object-contain invert"
          alt="brands duplicate"
        />
      </motion.div>
    </div>
  );
};

export default Brands;
