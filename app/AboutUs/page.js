import React from "react";
import { Banner, Header, WhyChooseUs } from "../components";

const AboutUs = () => {
  return (
    <div className="w-screen pt-14">
      <Header heading={"About Us"} />
      <div className=" w-full px-5 sm:px-[132px] pt-14 pb-8 sm:flex block relative items-center justify-between">
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
        <div className="sm:w-[440px] w-full flex flex-col sm:h-[815px]  justify-center py-10">
          <h2 style={{ paddingBottom: 30 }}>I'm Ganiyu</h2>
          <p className="text-center">
            These bags are specially made and crafted with quality materials and
            special made for you, don't get it twistedquality materials and
            special made for you, don't get it twisted made and crafted with
            quality materials and special made for you,.
          </p>
        </div>
      </div>
      <WhyChooseUs />
    </div>
  );
};

export default AboutUs;
