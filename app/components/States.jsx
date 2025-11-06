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
import { Cart } from ".";
import { useStateContext } from "../context/StateContextProvider";
import { useState, useEffect } from "react";

const Qty = () => {
  const { qty } = useStateContext();
  return <p>{qty}</p>;
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
  const { qty, addToCart, setShowCart } = useStateContext();

  return (
    <button
      className="addToCart"
      onClick={() => {
        addToCart(slugData, qty);
        setShowCart(true);
      }}
    >
      ${slugData.price * qty}.00&nbsp;&nbsp;&nbsp;-
      <AiOutlineTag style={{ fontSize: 18, marginRight: 8, marginLeft: 10 }} />
      BUY NOW
    </button>
  );
};

export const Thumbnails = ({ slugData }) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex w-full sm:w-[675px] py-10 sm:py-0 flex-col justify-center items-center">
      <div className=" w-full flex sm:w-[620px] h-[400px] items-center justify-center">
        <img
          className="h-[500px] object-cover "
          src={urlFor(slugData.image[index]).url()}
        />
      </div>
      <div className="h-[155px] sm:w-[620px]  w-full overflow-x-scroll scroll-smooth mt-[45px] flex items-center justify-center">
        {slugData.image?.map((item, i) => (
          <img
            className={
              i === index
                ? "opacity-1 border-[1px] border-Primary h-[135px] w-[113px] object-cover m-[5px] rounded-[5px] cursor-pointer "
                : "opacity-55 active:opacity-1 border-[1px] border-red-700 border-none h-[135px] w-[113px] object-cover m-[5px] rounded-[5px] cursor-pointer"
            }
            src={urlFor(item).url()}
            key={i}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export const AddToCartButton = ({ slugData }) => {
  const { addToCart, qty } = useStateContext();

  return (
    <button
      className="buyNow"
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
