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
}

export default ProductCard;
