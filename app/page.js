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
  SectionTwo,
  ModernBag,
  Brands,
  Sales,
  BottomBanner,
} from "./components";
import { StateContext } from "./context/StateContextProvider";

async function Home() {
  const data = await getData();

  return (
    <div className="relative">
      <HeroBanner />
      <Brands />

      <SectionTwo data={data} />
      <WhyChooseUs />

      <ModernBag />

      <Sales />
      <BottomBanner />
    </div>
  );
}

export default Home;

export async function getData() {
  const products = await client.fetch(
    '*[_type == "product"]'
    //   , {
    //   cache: "force-cache",
    // }
  );

  return { products };
}
