import React from "react";
import {
  AiOutlineCar,
  AiOutlinePhone,
  AiOutlineShopping,
  AiOutlineShoppingCart,
  AiOutlineSmile,
} from "react-icons/ai";

const WhyChooseUs = () => {
  return (
    <section className="bg-[#F5F5F5] w-screen ">
      <div className="w-full relative flex flex-col-reverse lg:flex-row lg:px-[180px] px-5 items-center py-20 lg:py-[180px]">
        <div className=" *:text-center lg:*:text-left lg:w-[560px] space-y-7">
          <p className="text-[32px] font-bold leading-normal text-black">
            Why Choose Us
          </p>
          <p className=" text-[17px] max-w-[510px] text-black leading-normal">
            These bags are specially made and crafted with quality materials and
            special made for you, don't get it.
          </p>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
            <div className="sm:w-[250px] gap-[6px] flex flex-col justify-center sm:items-start items-center">
              <span className="w-[32px] h-[32px] rounded-[11px] bg-[#abf576] shadow-[inset_0px_0px_5px_0px_rgba(138,138,138,0.43),0_0px_3px_2px_rgba(180,245,147,0.65)] flex justify-center items-center">
                <AiOutlineCar fill="black" size={17} />
              </span>
              <p className="text-[17px] font-bold text-gray-800 text-center lg:text-left le leading-tight py-2">
                Fast & free shipping
              </p>
              <p className="text-[12px] text-black text-center lg:text-left leading-normal">
                These bags are specially made and crafted with quality materials
                and special made for you, don't get it.
              </p>
            </div>

            <div className="sm:w-[250px] gap-[6px] flex flex-col justify-center sm:items-start items-center">
              <span className="w-[32px] h-[32px] rounded-[11px] bg-[#abf576] shadow-[inset_0px_0px_5px_0px_rgba(138,138,138,0.43),0_0px_3px_2px_rgba(180,245,147,0.65)] flex justify-center items-center">
                <AiOutlineShoppingCart fill="black" size={17} />
              </span>
              <p className="text-[17px] font-bold text-gray-800 text-center lg:text-left le leading-tight py-2">
                Easy to Shop
              </p>
              <p className="text-[12px] text-black text-center lg:text-left leading-normal">
                These bags are specially made and crafted with quality materials
                and special made for you, don't get it.
              </p>
            </div>

            <div className="sm:w-[250px] gap-[6px] flex flex-col justify-center sm:items-start items-center">
              <span className="w-[32px] h-[32px] rounded-[11px] bg-[#abf576] shadow-[inset_0px_0px_5px_0px_rgba(138,138,138,0.43),0_0px_3px_2px_rgba(180,245,147,0.65)] flex justify-center items-center">
                <AiOutlinePhone fill="black" size={17} />
              </span>
              <p className="text-[17px] font-bold text-gray-800 text-center lg:text-left le leading-tight py-2">
                24/7 Support
              </p>
              <p className="text-[12px] text-black text-center lg:text-left leading-normal">
                These bags are specially made and crafted with quality materials
                and special made for you, don't get it.
              </p>
            </div>

            <div className="sm:w-[250px] gap-[6px] flex flex-col justify-center sm:items-start items-center">
              <span className="w-[32px] h-[32px] rounded-[11px] bg-[#abf576] shadow-[inset_0px_0px_5px_0px_rgba(138,138,138,0.43),0_0px_3px_2px_rgba(180,245,147,0.65)] flex justify-center items-center">
                <AiOutlineSmile fill="black" size={17} />
              </span>
              <p className="text-[17px] font-bold text-gray-800 text-center lg:text-left le leading-tight py-2">
                Hassle Free
              </p>
              <p className="text-[12px] text-black text-center lg:text-left leading-normal">
                These bags are specially made and crafted with quality materials
                and special made for you, don't get it.
              </p>
            </div>
          </div>
        </div>

        <div className="relative  w-fit flex justify-center items-center lg:h-[500px]">
          <p className="text-[165px] leading-tight font-bold absolute -top-[80px] -z-0 text-black">
            FENDI
          </p>
          <img
            className="w-[590px] object-cover lg:h-[650px] lg:w-[590px] object-center "
            src="/images/bags5.png"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
