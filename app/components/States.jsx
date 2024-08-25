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
    <div className="prodPleft">
      <div className="prodPimg1box">
        <img className="prodPimg1" src={urlFor(slugData.image[index]).url()} />
      </div>
      <div className="prodPAllimg2box">
        {slugData.image?.map((item, i) => (
          <img
            className={i === index ? "prodPimg22" : "prodPimg2"}
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
    <div className="allProductContainer">
      {filtered.map((product) => (
        <Link href={`/product/${product.slug.current}`}>
          <div className="allProduct" key={product._id}>
            <div className="allProductImg">
              <AiFillPlusCircle className="allProductAddtoCart" />
              <img src={urlFor(product.image[0]).url()} />
            </div>
            <div className="allProductRatingCont">
              <AiFillStar className="ratingStar" />
              <AiFillStar className="ratingStar" />
              <AiFillStar className="ratingStar" />
              <AiFillStar className="ratingStar" />
              <AiFillStar className="ratingStar" />
              <p>40</p>
            </div>
            <p className="allProductName">{product.name}</p>
            <h4 className="allProductPrice">$ {product.price}.00</h4>
          </div>
        </Link>
      ))}
    </div>
  );
};
