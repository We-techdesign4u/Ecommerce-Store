import React from "react";
import Link from "next/link";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Footer = () => {
  return (
    <section className=" w-screen bg-black px-5 lg:pt-[80px] pt-[40px] pb-[20px] lg:pb-[50px] lg:px-[132px]">
      <div className="sm:flex sm:flex-row space-y-4 sm:space-y-0 justify-between">
        <div className=" w-[300px]">
          <img src="images/baggywhite.png" className="w-[120px] " alt="" />
          <p className="text-white text-[14px] leading-tight">
            There are many variations message of Loren Ipsum available, but this
            one is it for me, yes this is more like it because I still need more
            text to fill up this space.
          </p>
        </div>

        <div className="footerQuickLinks">
          <p className="text-16px font-bold text-white">Quick Links</p>
          <ul className="">
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
            +234 70 699 52 339, kindly reach out for more designs like this one,
            I probably need more text here too since i see it's small.
          </p>
        </div>
        <div className="lg:w-[350px] hidden lg:block">
          <p className="font-bold text-[#d3d3d3] pt-5 lg:pt-0">
            Subscribe to Our Email
          </p>
          <p className="text-[#d3d3d3] text-[20px] py-2">
            For Latest News & Update
          </p>

          <form className="flex flex-row justify-between items-center p-[5px] h-[60px] lg:w-[350px] w-full bg-[#abf576] rounded-[50px]">
            <input
              className=" placeholder:text-gray-800 h-[40px] pl-2 rounded-0 border-0 active:border-transparent border-transparent w-full bg-transparent"
              type="text"
              placeholder="Enter your email"
              color=""
            />

            <button className=" flex items-center justify-center px-5 h-[40px] bg-primary-dark text-[16px] text-white rounded-[50px] ">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="w-[300px]  lg:hidden ">
        <p className="font-bold text-[#d3d3d3] pt-5 lg:pt-0">
          Subscribe to Our Email
        </p>
        <p className="text-[#d3d3d3] text-[20px] py-2">
          For Latest News & Update
        </p>

        <form className="flex flex-row justify-between items-center p-[5px] h-[60px]  w-full bg-[#abf576] rounded-[50px]">
          <input
            className=" placeholder:text-gray-800 h-[40px] pl-2 rounded-0 border-0 active:border-transparent border-transparent w-full bg-transparent"
            type="text"
            placeholder="Enter your email"
            color=""
          />

          <button className=" flex items-center justify-center px-5 h-[40px] bg-primary-dark text-[16px] text-white rounded-[50px] ">
            Submit
          </button>
        </form>
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
