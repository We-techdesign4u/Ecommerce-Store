import React from "react";
import {
  AiFillStar,
  AiOutlineShoppingCart,
  AiFillShopping,
  AiFillPlusCircle,
} from "react-icons/ai";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/client";
import Link from "next/link";

async function ProductCard() {
  return (
    <div>
      {data.products.map((product) => (
        <Link href={`/product/${product.slug.current}`}>
          <div
            className="allProduct block bg-white w-[280px] p-3 rounded-[40px] cursor-pointer "
            key={product._id}
          >
            <div className="allProductImg w-full h-[250px] flex justify-center items-center relative">
              <AiFillPlusCircle className="allProductAddtoCart" />
              <img src={urlFor(product.image[0]).url()} />
            </div>
            <div className="">
              <p className="font-bold">{product.name}</p>
              <div className="flex  justify-between">
                <p>${product.price}.00</p>
                <span className="inline-flex">
                  <AiFillStar size={15} className="fill-yellow-400" />
                  <AiFillStar size={15} className="fill-yellow-400" />
                  <AiFillStar size={15} className="fill-yellow-400" />
                  <AiFillStar size={15} className="fill-yellow-400" />
                  <AiFillStar size={15} className="fill-gray-400" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductCard;
