"use client";
import React from "react";
import Link from "next/link";
import { urlFor } from "../../sanity/lib/client";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useStateContext } from "../context/StateContextProvider";
import { useRef } from "react";

const ProductDesc = (props) => {
  const { handleScrollLeft, handleScrollRight } = useStateContext();
  const data = props.data;
  const scrollableRecProdRef = useRef(null);

  return (
    <div className="productDescSec">
      <div className="scrollbox">
        <div
          className="scroll"
          onClick={() => handleScrollLeft(scrollableRecProdRef)}
        >
          <AiOutlineLeft />
        </div>
      </div>
      <div className="productDescBox" ref={scrollableRecProdRef}>
        {data.products.map((product) => (
          <div key={product.id}>
            <Link href={`/product/${product.slug.current}`}>
              <div className="ProductDescContainer">
                <img
                  className="ProductDescImage"
                  src={urlFor(product.image && product.image[0])}
                />
                <div className="ProductDesc">
                  <p style={{ margin: 0, fontWeight: "bold" }}>
                    {product.name}
                  </p>
                  <p style={{ margin: 0, lineHeight: 1.3, paddingBottom: 10 }}>
                    {product.desc}
                  </p>
                  <a>Read More</a>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="scrollbox2">
        <div
          className="scroll"
          onClick={() => handleScrollRight(scrollableRecProdRef)}
        >
          <AiOutlineRight />
        </div>
      </div>
    </div>
  );
};

export default ProductDesc;
