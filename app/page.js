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
} from "./components";
import { StateContext } from "./context/StateContextProvider";

async function Home() {
  const data = await getData();

  return (
    <>
      <HeroBanner />

      <SectionTwo data={data} />
      <WhyChooseUs />

      <ModernBag />

      <ProductDesc data={data}></ProductDesc>
    </>
  );
}

export default Home;

export async function getData() {
  // Fetch data from external API

  const products = await client.fetch('*[_type == "product"]');

  return { products };
}
