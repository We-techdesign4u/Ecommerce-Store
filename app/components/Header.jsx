import React from "react";

const Header = ({ heading }) => {
  return (
    <div className="bg-[url('/images/Banner.jpg')] bg-cover bg-right-bottom bg-no-repeat">
      <div className=" w-full h-[300px] flex justify-center items-center text-center backdrop-blur-sm">
        <div className="w-[400px] ">
          <h2 style={{ color: "#d3d3d3" }} className="aboutUSHeading">
            {heading}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Header;
