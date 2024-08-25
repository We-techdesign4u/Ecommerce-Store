import React from "react";

const HeroBanner = () => {
  return (
    <div className="heroBanner">
      <div className="heroLeft">
        <h2 style={{ color: "#FFFF" }}>Mordern Handcrafted Quality Designs.</h2>
        <p style={{ paddingBottom: 20, color: "#FFFF" }}>
          These bags are specially made and crafted with quality materials and
          special made for you, don't get it twisted made and crafted with
          quality materials and special made for you, don't.
        </p>
        <div>
          <button className="shopnow">Shop Now</button>
          <button className="explore1">Explore</button>
        </div>
      </div>
      <div className="heroRight">
        <img className="heroBannerImg" src={"/images/HBIMGDZ.png"} />
      </div>
    </div>
  );
};

export default HeroBanner;
