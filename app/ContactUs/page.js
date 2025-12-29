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
      {/* <div className=" sm:h-[665px] flex sm:flex-row flex-col py-[80px] px-5 sm:px-[132px] relative items-center justify-center">
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
      </div> */}
      {/**Get intouch */}
      <div
        id="getintouch"
        className="bg-LtBackground  dark:bg-black w-full justify-items-center px-5 lg:px-[220px] pt-20 lg:py-20"
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
          <div className="w-full pt-10 lg:flex-row flex-col-reverse  flex">
            <div className="lg:w-[50%] w-full pt-20 flex items-center">
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
