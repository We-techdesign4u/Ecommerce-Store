import React from "react";
import { Banner, WhyChooseUs } from "../components";

const AboutUs = () => {
  return (
    <div>
      <Banner />
      <div className="aboutUsContainer">
        <div style={{ width: 400 }}>
          <h2 style={{ color: "#d3d3d3" }} className="aboutUSHeading">
            About Us
          </h2>
          <p
            style={{
              color: "#d3d3d3",
            }}
          >
            Lourem Ipsum taka impezum lazary dammading trycopium lez pesizium
            centre monterio busterico tantropica
          </p>
        </div>
      </div>
      <div className="sect3" style={{ justifyContent: "left" }}>
        <div className="sect3Left" style={{ width: 650 }}>
          <div className="sect3RImgWrap">
            <img className="element1" src="/images/Element.png" />
            <img className="img2" src="/images/bags.jpg" />
          </div>
        </div>
        <div className="sect3Right">
          <div>
            <h2 style={{ paddingBottom: 30 }}>I'm Ganiyu</h2>
            <p style={{ paddingBottom: 30 }}>
              These bags are specially made and crafted with quality materials
              and special made for you, don't get it twistedquality materials
              and special made for you, don't get it twisted made and crafted
              with quality materials and special made for you,.
            </p>
          </div>
        </div>
      </div>
      <WhyChooseUs />
    </div>
  );
};

export default AboutUs;
