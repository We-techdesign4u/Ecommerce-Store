import React from "react";
import { Button } from ".";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <div className="w-screen pt-10 h-screen  bg-[url(/images/backgroundNew.jpg)] justify-between flex sm:flex-row bg-cover bg-no-repeat flex-col-reverse lg:px-[180px] px-5">
      <div className=" lg:w-[500px] text-center lg:text-left ">
        <p className="text-[40px] text-gray-200 leading-none font-bold">
          Mordern Handcrafted Quality Designs.
        </p>
        <p className="text-white pt-10 pb-10 text-[15px]">
          These bags are specially made and crafted with quality materials and
          special made for you, don't get it twisted made and crafted with
          quality materials and special made for you, don't.
        </p>
        <div className="flex w-full sm:justify-start justify-center">
          <Link
            href={"/product/allproducts"}
            className="w-[202px] h-[54px] p-[6px] pl-[15px] bg-[#E8E8E8] shadow-[inset_0px_0px_9px_3px_rgba(0,0,0,0.25),0_0px_10px_5px_rgba(255,255,255,0.35)] rounded-[21px] border-[1px] border-[#82828275] flex justify-between items-center"
          >
            <p className="text-black font-bold text-[25px]">Shop Now</p>{" "}
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
      {/* <div className=" sm:w-[60%] w-full flex items-center justify-end relative object-cover">
        <img className="w-[870px] object-cover" src={"/images/HBIMGDZ.png"} />
      </div> */}
    </div>
  );
};

export default HeroBanner;
