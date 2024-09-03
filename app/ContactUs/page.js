"use client";
import React from "react";
import { App, Banner } from "../components";
import {
  AiFillPhone,
  AiFillMail,
  AiTwotoneHighlight,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineLinkedin,
  AiFillTwitch,
  AiFillX,
  AiFillTwitterCircle,
} from "react-icons/ai";

const ContactUs = () => {
  return (
    <div>
      <Banner />
      <div className="aboutUsContainer">
        <div style={{ width: 400 }}>
          <h2 style={{ color: "#d3d3d3" }} className="aboutUSHeading">
            Contact Us
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

      <div
        className="sect3"
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="sect3Left"
          style={{
            width: 400,

            justifyContent: "center",
            marginRight: 130,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2 style={{ lineHeight: 1, margin: 0 }}>Get In Touch</h2>
          <p>
            There are many variations message of Loren Ipsum available, but this
            one is it for me, yes this is more like it because I still need more
            text to fill up this space.
          </p>
          <div className="ContPcontactInfo">
            <div className="ContPAdd">
              <div className="ContPAddIcon">
                <AiTwotoneHighlight />
              </div>
              <div className="ContPAddText">
                <h3>Address</h3>
                <p>Nigeria Ogun State</p>
              </div>
            </div>
            <div className="ContPAdd">
              <div className="ContPAddIcon">
                <AiFillPhone />
              </div>
              <div className="ContPAddText">
                <h3>Phone Number</h3>
                <p>+234 70 669 52 339</p>
              </div>
            </div>
            <div className="ContPAdd">
              <div className="ContPAddIcon">
                <AiFillMail />
              </div>
              <div className="ContPAddText">
                <h3>E-Mail</h3>
                <p>We-Design4u11@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="contPfollow">
            <h3 style={{ lineHeight: 2, margin: 0 }}>Follow Us:</h3>
            <div className="followIcons">
              <div className="ContPAddIcon">
                <AiFillGithub />
              </div>
              <div className="ContPAddIcon">
                <AiFillLinkedin />
              </div>
              <div className="ContPAddIcon">
                <AiFillTwitterCircle />
              </div>
            </div>
          </div>
        </div>
        <div
          className="sect3Right"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <form className="contactPageForm">
            <p>Send a Message</p>
            <input className="textField" type="text" placeholder="Name" />
            <input
              className="textField"
              type="text"
              placeholder="Email address"
            />
            <textarea
              className="textField"
              // type="text"
              placeholder="Message"
              rows={4}
              cols={40}
            />
            <p>
              By clicking on submit, you aggree to send a message to the owner
              of this website and will respond via your email as listed above
            </p>

            <button className="emailSubButton">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
