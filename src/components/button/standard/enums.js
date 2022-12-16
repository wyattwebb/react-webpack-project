import { oneOf } from "prop-types";

const iconEnum = {
  position: {
    left: "left",
    right: "right",
  },
  type: {
    add: "fal fa-plus-circle",
    edit: "fal fa-pencil",
    check: "fas fa-check",
    next: "fal fa-chevron-right",
    back: "fal fa-chevron-left",
    audio: "fal fa-microphone",
    settings: "fal fa-cog",
  },
};

const iconPositionPropType = oneOf(Object.values(iconEnum.position));
const iconTypePropType = oneOf(Object.values(iconEnum.type));

const sizeEnum = {
  small: "btn-sm",
  standard: "",
  callOut: "btn-lg",
};

const sizePropType = oneOf(Object.values(sizeEnum));
export { iconEnum, iconPositionPropType, iconTypePropType, sizePropType, sizeEnum };
