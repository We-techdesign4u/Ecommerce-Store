import Image from "next/image";
import RootLayout from "./layout";
import styles from "./globals.css";
import { client } from "../sanity/lib/client";
import {
  Product,
  Banner,
  ProductDesc,
  Cart,
  HeroBanner,
  WhyChooseUs,
} from "./components";
import { StateContext } from "./context/StateContextProvider";

async function Home() {
  const data = await getData();
  // console.log(data);
  return (
    <RootLayout>
      <>
        <HeroBanner />
        <div className="sect1">
          <div className="sect1Left">
            <div>
              <h2 style={{ paddingBottom: 40 }}>
                Crafted with excellent material.
              </h2>
              <p style={{ paddingBottom: 40 }}>
                These bags are specially made and crafted with quality materials
                and special made for you, don't get it twisted.
              </p>
              <button className="explore2">Explore</button>
            </div>
          </div>
          <div className="sect1Right">
            <Product data={data}></Product>
          </div>
        </div>
        <WhyChooseUs />

        <div className="sect3">
          <div className="sect3Left">
            <div className="sect3RImgWrap">
              <img className="element1" src="/images/Element.png" />
              <img className="img2" src="/images/bags.jpg" />
              <div className="sect3imgs">
                <img className="img3" src="/images/bag8.jpg" />
                <img className="img4" src="/images/bagdisplay2.jpg" />
              </div>
            </div>
          </div>
          <div className="sect3Right">
            <div>
              <div>
                <h2 style={{ paddingBottom: 30 }}>
                  We Help You Make Modern Bag Designs
                </h2>
                <p style={{ paddingBottom: 30 }}>
                  These bags are specially made and crafted with quality
                  materials and special made for you, don't get it
                  twistedquality materials and special made for you, don't get
                  it twisted made and crafted with quality materials and special
                  made for you,.
                </p>
              </div>
              <ul className="sect3list">
                <li>Special made for you, made and crafted don't.</li>
                <li>Special made for you, made and crafted don't.</li>
                <li>Special made for you, made and crafted don't.</li>
                <li>Special made for you, made and crafted don't.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sect4">
          <ProductDesc data={data}></ProductDesc>
        </div>
      </>
    </RootLayout>
  );
}

export default Home;

export async function getData() {
  // Fetch data from external API

  const products = await client.fetch('*[_type == "product"]', {
    next: { cache: "no-store" },
  });

  return { products };
}
