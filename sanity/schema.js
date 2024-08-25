import { product } from "./schemaTypes/product";
import { banner } from "./schemaTypes/banner";
import { author } from "./schemaTypes/author";

export const schema = {
  types: [author, product, banner],
};
