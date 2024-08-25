import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";
import { SanityClient } from "@sanity/client";

import { apiVersion, dataset, projectId, useCdn, token } from "../env";
import { Truculenta } from "next/font/google";

export const client = createClient({
  projectId: "zc4qse6u",
  dataset: "production",
  apiVersion: "2024-06-12",
  useCdn: false,

  // projectId,
  // dataset,
  // apiVersion,
  // useCdn,
  token,
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

// const imageBuilder = createImageUrlBuilder(client); 1

// export const urlForImage = (source) => builder.image(source);

// const imageBuilder = createImageUrlBuilder(client);

// export const urlForImage = (source) => {
//   return imageBuilder?.image(source);
// };
