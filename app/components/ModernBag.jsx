import React from "react";

const ModernBag = () => {
  return (
    <section className=" flex flex-col w-screen sm:flex-row h-fit relative items-center justify-between py-10 sm:py-[60px]  px-5 sm:px-[132px]">
      <div className="sm:w-[750px] w-full relative h-[1010px] sm:h-[665px]">
        <div className="relative flex ">
          <img className="w-[240px] absolute top-0" src="/images/Element.png" />
          <img
            className=" absolute object-cover w-[280px] sm:h-[545px] sm:w-[460px] object-left-top rounded-[10px] left-[50px] sm:left-[80px] top-[50px] sm:top-[80px] "
            src="/images/bags.jpg"
          />
          <div className=" *:shadow-md  h-[588px] w-[300px] absolute justify-between items-end right-0 flex flex-col top-[380px] sm:top-[80px]">
            <img
              className=" w-[200px] h-[200px] object-cover object-left-bottom rounded-[10px]"
              src="/images/bag8.jpg"
            />
            <img
              className="w-[300px] h-[365px] object-cover object-left-bottom rounded-[10px]"
              src="/images/bagdisplay2.jpg"
            />
          </div>
        </div>
      </div>
      <div className="sm:w-[440px] w-full sm:h-[815px] flex items-center">
        <div>
          <div className="*:text-center sm:*:text-left">
            <h2 className="pb-[30px] leading-10">
              We Help You Make Modern Bag Designs
            </h2>
            <p style={{ paddingBottom: 30 }}>
              These bags are specially made and crafted with quality materials
              and special made for you, don't get it twistedquality materials
              and special made for you, don't get it twisted made and crafted
              with quality materials and special made for you,.
            </p>
          </div>
          <ul className="pl-[15px] grid grid-cols-2 *:text-[13px] *:leading-normal *:pb-[12px] *:w-[170px] *:pr-[35px] ">
            <li>Special made for you, made and crafted don't.</li>
            <li>Special made for you, made and crafted don't.</li>
            <li>Special made for you, made and crafted don't.</li>
            <li>Special made for you, made and crafted don't.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ModernBag;
