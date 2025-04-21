"use client";
// "use server";
import { useEffect } from "react";

import React, { useRef } from "react";
import Link from "next/link";
import { urlFor } from "../../sanity/lib/client";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useStateContext } from "../context/StateContextProvider";

const Product = (props) => {
  const { addToCart, handleScrollLeft, handleScrollRight } = useStateContext();
  const data = props.data;

  const scrollableProdRef = useRef(null);

  // console.log("data", data);

  return (
    <div className="products">
      <div className="scrollbox">
        <span
          className="scroll"
          onClick={() => handleScrollLeft(scrollableProdRef)}
        >
          <AiOutlineLeft />
        </span>
      </div>

      <div className="productbox" ref={scrollableProdRef}>
        {data.products.map((product) => (
          <div className="Product" key={product._id}>
            <Link
              style={{
                position: "relative",
                marginTop: 160,
              }}
              href={`/product/${product.slug.current}`}
            >
              <div className="productbackg">
                <img
                  className="ProductImages"
                  src={urlFor(product.image && product.image[0])}
                  alt={"product._type"}
                />
                <p style={{ marginTop: 50 }}>{product.name}</p>
                <p style={{ marginTop: -15 }}>${product.price}.00</p>
              </div>
            </Link>
            <button
              onClick={() => addToCart(product, 1)}
              className="productbutton"
              style={{ fontSize: 20 }}
            >
              +
            </button>
          </div>
        ))}
      </div>
      <div className="scrollbox2">
        <div
          className="scroll"
          onClick={() => handleScrollRight(scrollableProdRef)}
        >
          <AiOutlineRight />
        </div>
      </div>
    </div>
  );
};

export default Product;
