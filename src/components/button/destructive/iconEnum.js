import { oneOf } from "prop-types";

const iconEnum = {
  close: "fal fa-times",
  back: "fal fa-chevron-left",
  delete: "fal fa-trash",
};

export const iconEnumPropType = oneOf(Object.values(iconEnum));
export default iconEnum;
