"use client";
import React from "react";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

const BottomBanner = () => {
  const imageVariants = {
    hidden: {
      x: 120,
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
    <section className="w-screen justify-items-center">
      <div className="w-full px-5 md:px-1 lg:max-w-[2500px] md:w-full justify-items-center lg:px-[180px] lg:py-[100px] pt-[100px] pb-[200px] ">
        <div
          ref={ref}
          className=" space-y-10 flex lg:flex-row md:flex-row flex-col justify-center items-center p-6 rounded-[27px] bg-[#B6FF82]"
        >
          <div className="space-y-6  lg:w-[446px] w-full md:w-[600px] ">
            <p className="text-[32px] font-bold leading-tight  lg:max-w-[300px] text-black">
              Ready to get your designer bag?
            </p>
            <p className="text-[17px] max-w-[510px] font-inter text-black leading-normal">
              Order today and take control of your fashion journey with smart
              purchases that leaves your audience with jaw dropping wow!
            </p>
            <div className="flex w-full sm:justify-start justify-center">
              <Link
                href={"/product/allproducts"}
                className="w-[170px] h-[54px] p-[6px] pl-[15px] bg-black shadow-[inset_0px_0px_9px_6px_rgba(255,255,255,0.27),0_0px_10px_5px_rgba(0,0,0,0.35)] rounded-[21px] border-[1px] border-[#82828275] flex justify-between items-center"
              >
                <p className="text-white font-bold text-[25px]">Explore</p>
                <span className="w-[32px] h-[32px] rounded-[11px] bg-[#abf576] shadow-[inset_0px_0px_5px_0px_rgba(138,138,138,0.43),0_0px_3px_2px_rgba(180,245,147,0.65)] flex justify-center items-center">
                  <svg
                    className="w-5"
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 27.98 31.2"
                  >
                    <path d="M.26,3.43,1.82,1A.73.73,0,0,1,2.44.57.75.75,0,0,1,3.07,1l8.58,13.62a2,2,0,0,1,0,2L5.82,25.84a.71.71,0,0,0-.1.71.64.64,0,0,0,.62.28h.21a2.66,2.66,0,0,0,1-.34,1.75,1.75,0,0,0,.73-.65l5.82-9.25a2,2,0,0,0,0-2L8.27,5.41a2.19,2.19,0,0,1-.21-1,2.19,2.19,0,0,1,.21-1L9.88,1a1.65,1.65,0,0,1,.73-.7,2,2,0,0,1,1-.29h5.77a2.1,2.1,0,0,1,1,.26,1.81,1.81,0,0,1,.7.57l8.69,13.78a2,2,0,0,1,0,2L19.14,30.21a.76.76,0,0,1-.63.42.73.73,0,0,1-.62-.42l-1.56-2.49a1.56,1.56,0,0,1-.26-.94,1.79,1.79,0,0,1,.26-1l5.82-9.25a1.56,1.56,0,0,0,.26-.94,1.79,1.79,0,0,0-.26-1l-5.82-9.2a2.14,2.14,0,0,0-.78-.7,2.1,2.1,0,0,0-1-.29H14.4a.73.73,0,0,0-.67.26c-.11.17-.07.4.1.68l5.88,9.25a2.44,2.44,0,0,1,0,2L11.08,30.21a2.15,2.15,0,0,1-.76.7,1.93,1.93,0,0,1-1,.29H3.59a2.1,2.1,0,0,1-1-.29,2,2,0,0,1-.78-.7L.26,27.77a2,2,0,0,1,0-2l5.82-9.2a2,2,0,0,0,0-2L.26,5.41a1.87,1.87,0,0,1-.26-1A1.87,1.87,0,0,1,.26,3.43Z" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div className="lg:w-[400px]  w-full h-[200px] lg:h-[200px] relative justify-items-center ">
            <div className="lg:h-[420px] h-[350px] w-[300px]  lg:-bottom-10 -bottom-[70%] md:bottom-0 object-cover lg:w-[390px] absolute">
              <motion.img
                alt="Bag"
                variants={imageVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="lg:w-[580px] z-10  w-[500px] h-[500px] lg:h-[630px] object-cover absolute -bottom-[30%] lg:-bottom-[30%]  "
                src="images/bag5.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomBanner;
