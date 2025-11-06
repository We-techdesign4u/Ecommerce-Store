import React from "react";
import {
  CustomDropdown,
  Filtering,
  HeroBanner,
  FilteredProduct,
} from "@/app/components";

import {
  AiFillStar,
  AiOutlineShoppingCart,
  AiFillShopping,
  AiFillPlusCircle,
} from "react-icons/ai";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/client";
import Link from "next/link";

async function page() {
  const data = await getData();

  const BrandOptions = [
    { value: "Gucci", label: "Gucci" },
    { value: "Fendi", label: "Fendi" },
    { value: "Louis Vuitton", label: "Louis Vuitton" },
    { value: "Versace", label: "Versace" },
    { value: "Dolce and Gabbana", label: "Dolce and Gabbana" },
    { value: "Other", label: "Other" },
  ];
  const BrandOptionsLabel = "Brand";

  const ColorOptions = [
    { value: "Blue", label: "Blue" },
    { value: "Black", label: "Black" },
    { value: "Brown", label: "Brown" },
    { value: "Pink", label: "Pink" },
    { value: "Other", label: "Other" },
  ];
  const ColorOptionsLabel = "Color";

  const ProductOptions = [
    { value: "Bag", label: "Bag" },
    { value: "Shoes", label: "Shoes" },
  ];
  const ProductOptionsLabel = "Product";

  return (
    <div className=" w-screen">
      <HeroBanner />
      <div className="bg-primary-lightbg w-full px-5 sm:px-[132px] block relative items-center">
        <div className=" *:py-2 sm:flex flex-row block py-[45px] w-full">
          <CustomDropdown Options={BrandOptions} name={BrandOptionsLabel} />
          <CustomDropdown Options={ColorOptions} name={ColorOptionsLabel} />
          <CustomDropdown Options={ProductOptions} name={ProductOptionsLabel} />
        </div>

        <div className="sm:flex pb-5">
          <p>Showing results for &nbsp; &nbsp;</p> <Filtering />
        </div>

        <FilteredProduct data={data} />
      </div>
    </div>
  );
}

export default page;

export async function getData() {
  // Fetch data from external API

  const products = await client.fetch('*[_type == "product"]', {
    next: { cache: "no-store" },
  });

  return { products };
}
