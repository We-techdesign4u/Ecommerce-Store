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
  AiFillWechat,
  AiOutlineArrowRight,
} from "react-icons/ai";

import { useActionState } from "react";

const ContactUs = () => {
  return (
    <div className="w-screen pt-14">
      {/**Get intouch */}
      <div
        id="getintouch"
        className="bg-white w-full justify-items-center px-5 lg:px-[220px] md:px-[50px] pt-20 lg:py-20"
      >
        <div className="w-full lg:max-w-[1000px] justify-items-center">
          <div className="text-center *:text-black ">
            <p className="font-bricolage pb-3 font-bold text-[1.8rem]">
              Get In Touch ...
            </p>
            <p className="font-interV text-[17px]">
              Interested in discussing how my skills can contribute to your
              projects?
            </p>
            <p className="font-interV text-[17px]">
              Please feel free to reach out.
            </p>
          </div>
          <div className="w-full pt-10 md:flex-row flex-col-reverse  flex">
            <div className="lg:w-[50%] md:w-[40%] w-full pt-20 flex items-center">
              <div className="">
                <div className="flex items-center mb-[20px] text-black font-interV">
                  <div className="*:text-black dark:text-gray-200 font-interV">
                    <p className=" text-[12px] font-bricolage ">Name:</p>
                    <p className=" pb-4 text-[20px]  font-bricolage ">
                      Oladapo Olowookere
                    </p>
                  </div>
                </div>

                <div className="flex items-center mb-[20px] text-black font-interV">
                  <div className="*:text-black dark:text-gray-200  font-interV">
                    <p className=" text-[12px] font-bricolage ">Address:</p>
                    <p className="text-[20px] ">
                      Nigeria{" "}
                      <span className="text-[15px]">
                        &#40;Available remotely&#41;
                      </span>
                    </p>
                  </div>
                </div>
                <div className=" flex items-center mb-[20px]">
                  <div className=" *:text-black dark:text-gray-200  ">
                    <p className="text-[12px] font-bricolage">Phone:</p>
                    <p className="text-[20px]">+234 70 669 52 339</p>
                  </div>
                </div>
                <div className="flex items-center mb-[20px]">
                  <div className="*:text-black dark:text-gray-200  ">
                    <p className="text-[12px] font-bricolage">EMail:</p>
                    <p className="text-[20px]">WeDesign4u11@gmail.com</p>
                  </div>
                </div>
                <div>
                  <SecButton
                    title={"Live Chat"}
                    icon={<AiFillWechat />}
                    withicon={"true"}
                    url={"https://wa.me/07069952339"}
                  />
                </div>
              </div>
              <div className=" mt-[30px] text-black"></div>
            </div>
            {/**form */}
            <div className="lg:w-[50%] w-full">
              <div className=" w-full bg-gray-100 dark:bg-gray-900 dark:border-[1px] dark:border-gray-500 rounded-[35px]">
                <form className="lg:p-[20px] px-2 py-3">
                  <div className="lg:flex ">
                    <div className="lg:w-[50%]">
                      <Formfield
                        id="firstName"
                        type="text"
                        placeholder="John"
                        title="First Name"
                        fieldtype="singleline"
                      />
                    </div>
                    <div className="lg:w-[50%]">
                      <Formfield
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        title="Last Name"
                        fieldtype="singleline"
                      />
                    </div>
                  </div>

                  <Formfield
                    type="text"
                    id="company"
                    placeholder="Acme Corp"
                    title="Company Name"
                    fieldtype="singleline"
                  />

                  <Formfield
                    id="email"
                    type="email"
                    placeholder="JohnDoe@email.com"
                    title="Email Address"
                    fieldtype="singleline"
                  />
                  <Formfield
                    id="message"
                    type="text"
                    placeholder="Write your message here"
                    title="Message"
                    multiple={true}
                    fieldtype="multiline"
                  />
                  <div className="px-5">
                    <p className="text-[14px] dark:text-gray-200  leading-tight text-black">
                      By clicking on submit, you agree to send a message to the
                      owner of this website and will respond via your email as
                      listed above
                    </p>
                    <div className=" ">
                      <SecButton
                        type={"submit"}
                        withicon={"true"}
                        title={"Send Message"}
                        // {!pending && <AiOutlineArrowRight className="ml-3 text-xl" />}
                        icon={<AiOutlineArrowRight />}
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="py-10 "></div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

const SecButton = ({
  title,
  icon,
  withicon,
  url,
  type,
  disabled,
  col1,
  col2,
}) => {
  return (
    <div className="py-10 flex ">
      <div className=" relative cursor-pointer   dark:shadow-[#00000074] flex justify-center items-center h-[45px] border-t-[2px] border-gray-700  rounded-[15px]  shadow-[inset_0px_0px_13px_6px_rgba(255,255,255,0.25),0_10px_15px_0px_rgba(0,0,0,0.45)]  bg-[#000000] font-semibold ">
        {type == "submit" ? (
          <button type={type} className=" text-white px-4 font-semibold ">
            {title}
            {/* {withicon == "true" ? (
              <span className="ml-2 w-[25px] rounded-full flex  bg-white h-[25px] justify-center items-center text-black">
                {icon}
              </span>
            ) : (
              <div></div>
            )} */}
          </button>
        ) : (
          <a
            href={url}
            type={type}
            className=" flex justify-center items-center  text-white px-4  font-semibold "
          >
            {title}
            {/* {withicon == "true" ? (
              <span className="ml-2 w-[25px] rounded-full flex  bg-white h-[25px] justify-center items-center text-black">
                {icon}
              </span>
            ) : (
              <div></div>
            )} */}
          </a>
        )}
      </div>
    </div>
  );
};

const Formfield = ({
  title,
  type,
  placeholder,
  keyboardType,
  multiple,
  value,
  onChange,
  fieldtype,
  id,
}) => {
  return (
    <div>
      <div className=" items-center justify-center border-white mb-[24px] px-4 rounded-[7px] ">
        <p className="font-interV text-[9px] text-gray-800 dark:text-gray-200 ">
          {title}
        </p>

        <div className="w-full h-auto  bg-white rounded-[5px] px-[10px] flex items-center">
          {fieldtype == "singleline" ? (
            <input
              id={id}
              name={id}
              title={title}
              className="text-black p-0 m-0  font-interV text-[11px] w-full h-[34px]"
              type={type}
              placeholder={placeholder}
              //   placeholderTextColor="#7b7b8d"

              value={value}
              onChange={onChange}
            />
          ) : (
            <textarea
              name={id}
              id={id}
              title={title}
              className="min-h-[100px] flex-1 text-black py-[7px] font-interV text-[11px] border-0 w-full h-full"
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              aria-multiline="true"
            />
          )}
        </div>
      </div>
    </div>
  );
};
