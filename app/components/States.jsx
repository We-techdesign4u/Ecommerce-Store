"use client";
import { urlFor, client } from "@/sanity/lib/client";

import React from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
  AiOutlineShareAlt,
  AiOutlineShoppingCart,
  AiOutlineTag,
  AiOutlineUser,
  AiFillPlusCircle,
  AiFillStar,
} from "react-icons/ai";

import Link from "next/link";

import { useStateContext } from "../context/StateContextProvider";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
const Qty = ({ color }) => {
  const { qty } = useStateContext();
  return <p className={`${color}`}>{qty}</p>;
};
export default Qty;

export const IncQty = () => {
  // const { incQty } = useStateContext();
  const { incQty } = useStateContext();

  return (
    <span
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={incQty}
    >
      <AiOutlinePlus />
    </span>
  );
};

export const DecQty = () => {
  // const { decQty } = useStateContext();
  const { decQty } = useStateContext();

  return (
    <span
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={decQty}
    >
      <AiOutlineMinus />
    </span>
  );
};

export const TotalProductPrice = ({ slugData }) => {
  const { qty } = useStateContext();

  return (
    <span className="text-white text-[12px]">${slugData.price * qty}.00</span>
  );
};

export const BuyNow = ({ slugData }) => {
  const { qty, addToCart, setShowCart, setIsShown } = useStateContext();

  return (
    <button
      className="px-5 text-black text-nowrap w-[150px] flex justify-center bg-[#B6FF82] py-2 rounded-[10px] text-[12px]"
      onClick={() => {
        addToCart(slugData, qty);
        setIsShown(true);
      }}
    >
      BUY NOW
    </button>
  );
};

export const Thumbnails = ({ slugData }) => {
  const [index, setIndex] = useState(0);

  const [direction, setDirection] = useState(0);

  const handleSelect = (i) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };
  console.log(slugData, "checkcolor");
  const colorMap = {
    purple: "bg-purple-500",
    red: "bg-red-500",
    blue: "bg-blue-500",
    gren: "bg-green-500",
  };

  return (
    <div className="flex w-full h-full space-y-10 flex-col justify-center items-center">
      <div className=" w-full flex  h-[400px] items-center justify-center overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={index}
            src={urlFor(slugData.image[index]).url()}
            custom={direction}
            initial={{
              x: direction > 0 ? 300 : -300,
              opacity: 0,
              scale: 1,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: direction > 0 ? 300 : 300,
              y: direction > 0 ? 300 : 300,
              opacity: 0,
              scale: 0,
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="absolute max-h-[500px] max-w-[500px] left-[150px] object-contain"
          />
        </AnimatePresence>
      </div>
      <div className="h-[40px] space-x-2  w-full flex items-center justify-center">
        {slugData.color?.map((item, i) => (
          <span
            style={{ backgroundColor: `${item}` }}
            key={i}
            onClick={() => handleSelect(i)}
            // style={{ backgroundColor: `${item.color}` }}
            className={`h-[25px] w-[25px] m-[5px] rounded-[5px] cursor-pointer transition
       
      ${i === index ? "opacity-100 ring-2 ring-black" : "opacity-55"}
    `}
          ></span>
        ))}
      </div>
    </div>
  );
};

export const AddToCartButton = ({ slugData }) => {
  const { addToCart, qty } = useStateContext();

  return (
    <button
      className=" flex"
      type="button"
      onClick={() => addToCart(slugData, qty)}
    >
      <AiOutlineShoppingCart style={{ fontSize: 18, marginRight: 8 }} />
      ADD TO CART
    </button>
  );
};

export const Filtering = () => {
  const { filters, remfilter } = useStateContext();

  return (
    <div className="flex">
      {filters.map((filter) => (
        <div key={filter.option} className="flex">
          <p className="eachFilter">{filter.option}</p>
          <span
            className="deletefilter"
            onClick={() => remfilter(filter.option)}
          >
            x
          </span>
        </div>
      ))}
    </div>
  );
};

export const FilteredProduct = (data) => {
  const products = data.data.products;
  const [filtered, setFiltered] = useState(products);
  const { filters } = useStateContext();

  //uncomment from here

  const filteritems = () => {
    if (filters.length > 0) {
      ////1
      // let temp = products.filter((item) =>
      //   filters.some((word) => item.name.includes(word))
      // );
      ////2
      const filteredarr = products.filter((item) =>
        filters.some((word) => item.name.includes(word.option))
      );

      ///////3
      // let tempItems = filters.map((selected) => {
      //   let temp = products.filter((item) => item.name.includes(selected));

      //   return temp;
      // });

      console.log(filters);

      setFiltered(filteredarr);

      ////// delete here
      // let temp = products.filter((item) =>
      //   filters.some((word) => item.name.includes(word))
      // );

      // setFiltered(temp);
    } else {
      setFiltered(products);
    }
  };

  useEffect(() => {
    filteritems();
  }, [filters]);

  // console.log(tempItems);

  // const filtereditems = data.products.filter((item) => item.name !== item.slug);

  return (
    <div className=" grid gap-x-[30px] gap-y-[20px] grid-cols-1 items-center justify-center sm:grid-cols-4 pb-[90px]">
      {filtered.map((product) => (
        <Link href={`/product/${product.slug.current}`}>
          <div
            className="block bg-white w-[280px] border-[0.5px] border-Primary-light rounded-[10px] transform transition duration-300 ease-in-out hover:shadow-md "
            key={product._id}
          >
            <div className="rounded-t-[10px] relative w-full h-[280px] bg-[#dce5e4] ">
              <AiFillPlusCircle className="absolute top-[10px] right-[10px] w-[20px] h-[20px]  text-primary-dark transition transform z-10 duration-500 ease-in-out hover:scale-110" />
              <img
                className="h-[280px] w-[220px] object-center object-cover transition transform duration-500 ease-in-out hover:scale-110"
                src={urlFor(product.image[0]).url()}
              />
            </div>
            <div className="px-3">
              <div className="flex items-center h-[30px] *:w-[15px]">
                <AiFillStar className=" " />
                <AiFillStar className="" />
                <AiFillStar className="" />
                <AiFillStar className="" />
                <AiFillStar className="" />
                <p>40</p>
              </div>
              <p className="">{product.name}</p>
              <h4 className="py-3">$ {product.price}.00</h4>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
