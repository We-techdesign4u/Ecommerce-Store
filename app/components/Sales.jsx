import React from "react";

const Sales = () => {
  return (
    <section className="w-screen bg-[#EDFFE0] ">
      <div className="w-full justify-between gap-y-10 md:flex-row flex lg:flex-row flex-col lg:px-[180px] py-[50px] md:px-[50px]  max-w-[2500px] ">
        <div className="justify-items-center *:text-center space-y-2">
          <p className="text-[35px] text-[#307002]">25,350+</p>
          <p className="text-[14px] text-[#262626]">Happy Customers</p>
        </div>
        <div className="justify-items-center *:text-center space-y-2">
          <p className="text-[35px] font-medium text-[#307002]">80,350</p>
          <p className="text-[14px] text-[#262626]">Folllowrs</p>
        </div>
        <div className="justify-items-center *:text-center space-y-2">
          <p className="text-[35px] font-medium text-[#307002]">800+</p>
          <p className="text-[14px] text-[#262626]">Stores</p>
        </div>
        <div className="justify-items-center *:text-center space-y-2">
          <p className="text-[35px] font-medium text-[#307002]">98%</p>
          <p className="text-[14px] text-[#262626]">Happy Customers</p>
        </div>
      </div>
    </section>
  );
};

export default Sales;
