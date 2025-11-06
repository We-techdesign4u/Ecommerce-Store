"use client";
import React from "react";
import { App, Banner, FormFieldText, Header } from "../components";
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
  AiFillMessage,
  AiFillHome,
} from "react-icons/ai";

const ContactUs = () => {
  return (
    <div className="w-screen pt-14">
      <Header heading={"Contact Us"} />

      <div className=" sm:h-[665px] flex sm:flex-row flex-col py-[80px] px-5 sm:px-[132px] relative items-center justify-center">
        <div className="  w-full sm:w-[400px] mx-[132px] ">
          <h2 className="font-lato font-bold py-4 text-[30px]">Get In Touch</h2>
          <p className="pb-4 pr-5">
            There are many variations message of Loren Ipsum available, but this
            one is it for me, yes this is more like it because I still need more
            text to fill up this space.
          </p>
          <div className="ContPcontactInfo">
            <div className="flex items-center mb-[20px]">
              <div className="h-[25px] w-[25px] mr-[10px] flex items-center justify-center">
                <AiFillHome />
              </div>
              <div className="m-0 font-lato text-[15px]">
                <h3 className="font-bold m-0 font-lato text-[15px]">Address</h3>
                <p className="m-0 font-lato text-[15px]">
                  Ogun, Nigeria &#40;Available remotely&#41;
                </p>
              </div>
            </div>
            <div className="flex items-center mb-[20px]">
              <div className="h-[25px] w-[25px]  mr-[10px] flex items-center justify-center">
                <AiFillPhone />
              </div>
              <div className="m-0 font-lato text-[11px]">
                <h3 className="font-bold m-0 font-lato text-[15px]">
                  Phone Number
                </h3>
                <p className="m-0 font-lato text-[15px]">+234 70 669 52 339</p>
              </div>
            </div>
            <div className="flex items-center mb-[20px]">
              <div className="h-[25px] w-[25px] mr-[10px] flex items-center justify-center">
                <AiFillMail />
              </div>
              <div className="">
                <h3 className="font-bold m-0 font-lato text-[15px]">E-Mail</h3>
                <p className="m-0 font-lato text-[15px]">
                  We-Design4u11@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[30px]">
            <p>Follow Us:</p>
            <div className="w-[130px] flex h-[30px] mb-[30px] items-center box-border justify-between">
              <a href="https://github.com/We-techdesign4u" className="">
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/olowookere-ganiyu-oladapo-9396b193/"
                className=""
              >
                <AiFillLinkedin />
              </a>
              <a href="https://twitter.com/Mr_deepee">
                <AiFillTwitterCircle />
              </a>
              <a href="">
                <AiFillMessage className="" />
              </a>
            </div>
          </div>
        </div>
        <div className="sm:w-[440px] w-full sm:px-5">
          <form className="bg-primary-lightbg sm:w-[450px] px-5 py-10 sm:p-[20px] space-y-3 rounded-[20px] shadow-md">
            <p className="pb-2">Send a Message</p>
            <FormFieldText
              type="text"
              placeholder="Name"
              title="Company Name"
              fieldtype="singleline"
            />

            <FormFieldText
              type="text"
              placeholder="Email Address"
              title="Email Address"
              fieldtype="singleline"
            />

            <p className="font-Lato font-semibold mb-1">Message</p>
            <textarea
              placeholder="Message"
              fieldtype="multiline"
              className={`bg-white w-full sm:w-[400px] min-h-[40px] border-[1px] border-Primary rounded-md pl-2 `}
            />

            <p className="py-4 font-montMed text-[12px] w-full sm:w-full">
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
