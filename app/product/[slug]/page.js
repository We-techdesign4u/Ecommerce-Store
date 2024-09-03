import { urlFor, client } from "@/sanity/lib/client";
import Image from "next/image";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
  AiOutlineShareAlt,
  AiOutlineShoppingCart,
  AiOutlineTag,
} from "react-icons/ai";

import { StateContext } from "@/app/context/StateContextProvider";
import { Qty, TotalProductPrice } from "@/app/components";
import { DecQty, IncQty, Thumbnails, AddToCartButton } from "@/app/components";

import { Cart } from "@/app/components";

import { ProductDesc, Product } from "@/app/components";
import { useStateContext } from "@/app/context/StateContextProvider";
import { App } from "@/app/components";

async function Page({ params }) {
  const newData = await getProduct({ params });

  const slugData = newData.props.res;
  const products = newData.props.products;
  const data = { data: { products } };
  // console.log(slugData);
  // const { index } = Indexs;

  // const data = props;

  // console.log(data.data.products[0].image);

  return (
    <div>
      <div className="prodPbox">
        <Thumbnails slugData={slugData} />

        <div className="prodPright">
          <div className="prodDetailsBox">
            <h2 style={{ marginTop: 0, fontSize: 26 }}>{slugData.name}</h2>
            <h2 style={{ fontSize: 26 }}>$ {slugData.price}.00</h2>
            <div>
              <span></span>
            </div>
            <h3 style={{ marginBottom: 5, marginTop: 40 }}>
              Product Description
            </h3>
            <p style={{ marginTop: 0 }}>{slugData.desc}</p>
            <h3 style={{ marginTop: 40 }}>Available Colors</h3>
            <div className="availColBox">
              <span className="availCol"></span>
              <span className="availCol"></span>
              <span className="availCol"></span>
            </div>
            <h3 style={{ marginTop: 50, marginBottom: 0 }}>Quantity</h3>

            <div className="qtybox">
              <div className="dec">
                <DecQty />
              </div>
              <div className="qty">
                <Qty />
              </div>
              <div className="inc">
                <IncQty />
              </div>
            </div>

            <div style={{ marginTop: 60 }}>
              <TotalProductPrice slugData={slugData} />
            </div>
            <div className="prodPageButtons">
              <AddToCartButton slugData={slugData} />

              <button className="share">
                <AiOutlineShareAlt style={{ fontSize: 18, marginRight: 8 }} />
                SHARE
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="sect4">
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
    `*[_type == "product" && slug.current == "${slug}"][0]`,
    {
      next: { cache: "force-cache" },
    }
  );
  const products = await client.fetch(`*[_type == "product"]`, {
    next: { cache: "force-cache" },
  });

  return { props: { res, products } };
}
