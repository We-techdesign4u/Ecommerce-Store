import React from "react";
import Link from "next/link";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Footer = () => {
  return (
    <section className=" w-screen bg-Primary px-5 sm:pt-[80px] pt-[40px] pb-[20px] sm:pb-[50px] sm:px-[132px]">
      <div className="sm:flex sm:flex-row  justify-between">
        <div className=" w-[300px]">
          <h2 className="footerLogo ">MY STORE</h2>
          <p
            style={{
              color: "#d3d3d3",
              lineHeight: 1.4,
            }}
          >
            There are many variations message of Loren Ipsum available, but this
            one is it for me, yes this is more like it because I still need more
            text to fill up this space.
          </p>
        </div>
        <div className="footerQuickLinks">
          <h3
            style={{
              color: "#d3d3d3",
            }}
          >
            Quick Links
          </h3>
          <ul>
            <li>
              <Link href="./">Home</Link>
            </li>
            <li>
              <Link href="/AboutUs">About Us</Link>
            </li>
            <li>
              <Link href="/product/allproducts">Products</Link>
            </li>
            <li>
              <Link href="/ContactUs">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="footerContactSect">
          <h3
            style={{
              color: "#d3d3d3",
            }}
          >
            Contact
          </h3>
          <p
            style={{
              color: "#d3d3d3",
              lineHeight: 1.4,
            }}
          >
            +234 80 340 77 133, kindly reach out for more designs like this one,
            I probably need more text here too since i see it's small.
          </p>
        </div>
        <div className="sm:w-[350px]">
          <p className="font-bold text-[#d3d3d3] pt-5 sm:pt-0">
            Subscribe to Our Email
          </p>
          <p className="text-[#d3d3d3] text-[20px] py-2">
            For Latest News & Update
          </p>

          <form className="flex flex-row justify-between items-center p-[5px] h-[60px] sm:w-[350px] w-full bg-Primary-light rounded-[50px]">
            <input
              className=" h-[40px] rounded-0 border-0 active:border-transparent border-transparent w-fit bg-transparent"
              type="text"
              placeholder="Enter your email"
            />

            <button className=" flex items-center justify-center w-[85px] h-[40px] bg-primary-dark text-[16px] text-white rounded-[50px] ">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="footerIcons">
        <AiFillGithub />
        <AiFillLinkedin />
        <AiFillTwitterSquare />
      </div>
    </section>
  );
};

export default Footer;
