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
    <section className="flex relative w-screen flex-col-reverse sm:flex-row sm:h-[855px] h-auto bg-primary-lightbg sm:px-[132px] px-5 items-center py-20">
      <div className=" *:text-center sm:*:text-left sm:w-[560px] pt-6 sm:pt-0 relative ">
        <h2 style={{ paddingBottom: 20 }}>Why Choose Us</h2>
        <p className="pb-[60px] sm:mr-[100px]">
          These bags are specially made and crafted with quality materials and
          special made for you, don't get it.
        </p>
        <div className="grid sm:grid-cols-2 flex-col justify-center items-center ">
          <div className="sm:w-[250px] flex flex-col justify-center sm:items-start items-center">
            <span className="bg-Primary-light rounded-full p-1 flex justify-center items-center">
              <AiOutlineCar />
            </span>
            <h3>Fast & free shipping</h3>
            <p className="sect2LeftDetailsBody">
              These bags are specially made and crafted with quality materials
              and special made for you, don't get it.
            </p>
          </div>
          <div className="sm:w-[250px] flex flex-col justify-center sm:items-start items-center">
            <span className="bg-Primary-light rounded-full p-1 flex justify-center items-center">
              <AiOutlineShoppingCart />
            </span>
            <h3>Easy to Shop</h3>
            <p className="sect2LeftDetailsBody">
              These bags are specially made and crafted with quality materials
              and special made for you, don't get it.
            </p>
          </div>
          <div className="sm:w-[250px] flex flex-col justify-center sm:items-start items-center">
            <span className="bg-Primary-light rounded-full p-1 flex justify-center items-center">
              <AiOutlinePhone />
            </span>
            <h3>24/7 Support</h3>
            <p className="sect2LeftDetailsBody">
              These bags are specially made and crafted with quality materials
              and special made for you, don't get it.
            </p>
          </div>
          <div className="sm:w-[250px] flex flex-col justify-center sm:items-start items-center">
            <span className="bg-Primary-light rounded-full p-1 flex justify-center items-center">
              <AiOutlineSmile />
            </span>
            <h3>Hassle Free</h3>
            <p className="sect2LeftDetailsBody">
              These bags are specially made and crafted with quality materials
              and special made for you, don't get it.
            </p>
          </div>
        </div>
      </div>

      <div className="sm:w-[630px] h-[450px] relative w-full sm:block flex justify-center items-center sm:h-[700px]">
        <img
          className="sm:w-[280px] w-[240px] absolute -z-9 left-0 top-0 "
          src="/images/Element.png"
        />
        <img
          className="w-[300px] object-cover sm:h-[615px] absolute  sm:w-[550px] object-left-top rounded-[10px] sm:absolute bottom-0 right-0"
          src="/images/bags5.jpg"
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
