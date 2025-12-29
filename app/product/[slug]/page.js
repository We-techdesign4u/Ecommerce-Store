import { urlFor, client } from "@/sanity/lib/client";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

import { useStateContext } from "../../context/StateContextProvider";
import { Qty, TotalProductPrice } from "@/app/components";
import { DecQty, IncQty, Thumbnails, AddToCartButton } from "@/app/components";

import { ProductDesc, Product } from "@/app/components";

import { App } from "@/app/components";
import { BuyNow } from "@/app/components/States";

async function Page({ params }) {
  const newData = await getProduct({ params });

  const slugData = newData.props.res;
  const products = newData.props.products;
  const data = { data: { products } };

  return (
    <div className=" w-screen ">
      <div className="px-5 lg:py-[180px]  py-[50px]  lg:px-[180px]">
        <div className="md:flex  md:flex-row overflow-hidden   block rounded-[40px] shadow-[0_0px_9px_3px_rgba(0,0,0,0.15)] ">
          <div className="w-full ">
            <Thumbnails slugData={slugData} />
          </div>

          <div className="block h-full  bg-[#272727] w-full">
            <div className="w-full lg:p-10 p-5 space-y-5 *:text-white">
              <div>
                <h2 className="text-[20px] text-white">{slugData.name}</h2>
                <p className="text-[14px] text-white font-Quicksand text">
                  $ {slugData.price}.00
                </p>
                <span className="inline-flex">
                  <AiFillStar size={15} className="fill-yellow-400" />
                  <AiFillStar size={15} className="fill-yellow-400" />
                  <AiFillStar size={15} className="fill-yellow-400" />
                  <AiFillStar size={15} className="fill-yellow-400" />
                  <AiFillStar size={15} className="fill-gray-400" />
                </span>
              </div>
              <div>
                <p className="text-[15px] text-white leading-[35px] font-bold">
                  Product Description
                </p>
                <p className="leading-tight text-white font-Quicksand">
                  {slugData.desc}
                </p>
              </div>
              <div>
                <p className="text-white">Available Colors</p>
                <div className="inline-flex space-x-3">
                  {slugData.color?.map((item, i) => (
                    <span
                      style={{ backgroundColor: `${item}` }}
                      key={i}
                      className={`h-[20px] w-[20px] rounded-md `}
                    ></span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-white">Quantity</p>

                <div className="flex gap-5">
                  <div className="flex w-[24px] h-[24px] justify-center items-end rounded-full bg-black">
                    <DecQty />
                  </div>
                  <div className="text-white">
                    <Qty color={"text-white"} />
                  </div>
                  <div className="flex w-[24px] h-[24px] justify-center items-end rounded-full bg-black">
                    <IncQty />
                  </div>
                </div>
              </div>

              <div>
                <p className="text-white pb-1">Total</p>

                <p className="px-3 py-1 w-fit rounded-full text-white bg-black">
                  <TotalProductPrice slugData={slugData} />
                </p>
              </div>

              <div className="flex gap-3">
                <BuyNow slugData={slugData} />

                <div className="px-3 text-white text-nowrap w-[130px] bg-black py-2 rounded-[10px] text-[12px]">
                  <AddToCartButton slugData={slugData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[300px]  px-132px flex relative items-center">
        <ProductDesc data={data.data} />
      </div>
    </div>
  );
}

export default Page;

export async function generateStaticParams() {
  const data = await client.fetch(`*[_type == "product"]`);

  return data.map((product) => ({
    slug: product.slug.current,
  }));
}

async function getProduct({ params }) {
  const slug = params.slug;

  const res = await client.fetch(
    `*[_type == "product" && slug.current == "${slug}"][0]`
    // ,
    // { cache: "force-cache" }
  );
  const products = await client.fetch(
    `*[_type == "product"]`
    //   , {
    //   cache: "force-cache",
    // }
  );

  return { props: { res, products } };
}
