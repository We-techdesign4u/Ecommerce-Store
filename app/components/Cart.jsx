"use client";
import React from "react";
import { useRef } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineCaretLeft,
  AiOutlineShopping,
  AiOutlineShareAlt,
  AiOutlineShoppingCart,
  AiOutlineTransaction,
  AiOutlineCheck,
  AiOutlineTag,
  AiOutlineDelete,
} from "react-icons/ai";
import { urlFor } from "@/sanity/lib/client";

import { Qty, TotalProductPrice } from ".";
import { useStateContext } from "../context/StateContextProvider";

import { IncQty } from ".";
import { DecQty } from ".";
import { TiDeleteOutline } from "react-icons/ti";

import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

const Cart = () => {
  const cartRef = useRef();
  const {
    cartItems,

    remFromCart,
    toggleCartItemQuanitity,
    totalProdutPrice,
    isShown,
    setIsShown,
  } = useStateContext();

  const config = {
    public_key: "FLWPUBK_TEST-91f5e066e0f3875c7e74bd5eaae2a5e8-X",
    tx_ref: Date.now(),
    amount: totalProdutPrice,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "g@gmail.com",
      phone_number: "0804858",
      name: "Nallldii",
    },
    customizations: {
      title: "My Bag Store",
      description: "",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="">
      {/**mobileCart */}
      <div className="lg:hidden" ref={cartRef}>
        <div
          className={
            isShown
              ? " transition duration-500 ease-in-out transform -top-[700px] translate-y-[760px] absolute flex"
              : "transition duration-500 ease-in-out transform -top-[700px] -translate-y-[760px] absolute flex"
          }
        >
          <div className="w-screen h-screen bg-[#45403d]">
            <div>
              <span
                className="*:text-yellow-500 ml-5 flex w-[130px] h-[30px] text-amber-500 items-center cursor-pointer"
                onClick={() => setIsShown(false)}
              >
                <AiOutlineCaretLeft style={{ marginRight: 10 }} />
                <p>Back to shop</p>
              </span>
            </div>
            <div className=" w-full h-full flex flex-col relative">
              <div className="w-full">
                {cartItems.length < 1 && (
                  <div className="empty-cart">
                    <AiOutlineShopping size={150} />
                    <p style={{ color: "white" }}>Your shopping bag is empty</p>
                  </div>
                )}
              </div>

              <div className="flex flex-col overflow-y-scroll pb-[180px]">
                {cartItems.length >= 1 &&
                  cartItems.map((item) => (
                    <div key={item._id} className=" w-full">
                      <div className="flex pl-3 items-center my-[10px]">
                        <div className="flex flex-row w-full justify-between h-[110px] items-center  bg-gray-400">
                          <div className="flex">
                            <div className="ml-2 w-[90px] h-[90px] rounded-full flex justify-center items-center bg-white">
                              <img
                                className="object-cover w-[60px] h-[90px] "
                                src={urlFor(item.image[0])}
                              />
                            </div>
                            <div className="">
                              <p className="text-[12px]">{item?.name}</p>
                              <p>Blue</p>
                              <p>$ {item?.price}.00</p>
                            </div>
                          </div>
                          <div className="CartProdQtyBox">
                            <div className="CartProdQty">
                              <p>{item.quantity}</p>
                            </div>
                            <div className="CartProdQtyBBox">
                              <div className="CartProdQtyB">
                                <span
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                  onClick={() =>
                                    toggleCartItemQuanitity(item._id, "inc")
                                  }
                                >
                                  <AiOutlinePlus />
                                </span>
                              </div>
                              <div className="CartProdQtyB">
                                <span
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  <AiOutlineMinus
                                    onClick={() =>
                                      toggleCartItemQuanitity(item._id, "dec")
                                    }
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <span
                          style={{ color: "white", cursor: "pointer" }}
                          onClick={() => remFromCart(item)}
                        >
                          <TiDeleteOutline />
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="w-full absolute z-10 bottom-[150px] ">
                <div className=" bg-[#45403d] mt-[10px] w-full h-[30px] *:text-white text-center ">
                  <p>Total: $ {totalProdutPrice}.00 USD</p>
                </div>
                <div className="h-[65px] bg-yellow-500 flex justify-center absolute w-full">
                  {cartItems.length < 1 && (
                    <span
                      className="flex w-full justify-center items-center cursor-pointer"
                      onClick={() => setIsShown(false)}
                    >
                      CONTINUE SHOPPING
                    </span>
                  )}
                  {cartItems.length >= 1 && (
                    <span
                      onClick={() =>
                        handleFlutterPayment({
                          callback: (response) => {
                            closePaymentModal();
                          },
                          onClose: () => {},
                        })
                      }
                    >
                      CHECKOUT
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" hidden lg:flex " ref={cartRef}>
        <div
          className={
            isShown
              ? "flex transition ease-in-out duration-500 transform absolute h-[600px] delay-200 top-[86px] -right-[550px] -translate-x-[540px]"
              : " flex transition ease-in-out duration-500 transform absolute h-[600px] delay-200 top-[86px] -right-[550px] translate-x-[0px] "
          }
        >
          <div className="elementBox">
            <div className="elementBox2">
              <div className="cartShootout ">
                <span
                  className={"CartStatus1"}
                  onClick={() => setIsShown(true)}
                >
                  <AiOutlineShoppingCart />
                </span>
                <span className={"CartStatus2"}>
                  <AiOutlineTransaction />
                </span>
                <span className={"CartStatus2"}>
                  <AiOutlineCheck />
                </span>
              </div>
            </div>
          </div>
          <div className="CartContentBox h-full  relative ">
            <span className="ContinueShop" onClick={() => setIsShown(false)}>
              <AiOutlineCaretLeft style={{ marginRight: 10 }} />
              <p>Back to shop</p>
            </span>

            <div className=" h-[450px]  flex flex-col overflow-y-scroll overflow-x-hidden">
              <div className="NoProductinCart">
                {cartItems.length < 1 && (
                  <div className="empty-cart">
                    <AiOutlineShopping size={150} />
                    <p style={{ color: "white" }}>Your shopping bag is empty</p>
                  </div>
                )}
              </div>

              <div className="">
                {cartItems.length >= 1 &&
                  cartItems.map((item) => (
                    <div key={item._id} className="CartContent">
                      <div className="CartProdBox">
                        <div className="CartProd">
                          <div className="CartProdImgCont">
                            <img
                              className="CartProdImg"
                              src={urlFor(item.image[0])}
                            />
                          </div>
                          <div className="CartProdName">
                            <h3>{item?.name}</h3>
                            <p>Blue</p>
                          </div>
                          <div className="CartProdQtyBox">
                            <div className="CartProdQty">
                              <p>{item.quantity}</p>
                            </div>
                            <div className="CartProdQtyBBox">
                              <div className="CartProdQtyB">
                                <span
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                  onClick={() =>
                                    toggleCartItemQuanitity(item._id, "inc")
                                  }
                                >
                                  <AiOutlinePlus />
                                </span>
                              </div>
                              <div className="CartProdQtyB">
                                <span
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  <AiOutlineMinus
                                    onClick={() =>
                                      toggleCartItemQuanitity(item._id, "dec")
                                    }
                                  />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="CartProdAmt">
                            <p>$ {item?.price}.00</p>
                          </div>
                        </div>
                        <span
                          style={{ color: "white", cursor: "pointer" }}
                          className="CartProdDelB"
                          onClick={() => remFromCart(item)}
                        >
                          <TiDeleteOutline />
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="CartTotal">
              <p>Total: $ {totalProdutPrice}.00 USD</p>
            </div>
            <div className="Checkout">
              {cartItems.length < 1 && (
                <span onClick={() => setIsShown(false)}>CONTINUE SHOPPING</span>
              )}
              {cartItems.length >= 1 && (
                <span
                  onClick={() =>
                    handleFlutterPayment({
                      callback: (response) => {
                        console.log(response);
                        closePaymentModal();
                      },
                      onClose: () => {},
                    })
                  }
                >
                  CHECKOUT
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
