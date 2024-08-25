import createImageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "../env";
import client from "./client";

const imageBuilder = createImageUrlBuilder(client);

export const urlForImage = (source) => {
  return imageBuilder?.image(source).auto("format").fit("max").url();
};
