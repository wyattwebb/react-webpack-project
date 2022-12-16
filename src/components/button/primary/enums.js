import { oneOf } from "prop-types";

const iconEnum = {
  position: {
    left: "left",
    right: "right",
  },
  type: {
    add: "fal fa-plus-circle",
    edit: "fal fa-pencil",
    check: "fal fa-check",
    next: "fal fa-chevron-right",
    back: "fal fa-chevron-left",
    list: "fal fa-list",
    export: "fal fa-file-download",
    video: "fal fa-video",
  },
};

const iconPositionPropType = oneOf(Object.values(iconEnum.position));
const iconTypePropType = oneOf(Object.values(iconEnum.type));

const sizeEnum = {
  standard: "",
  callOut: "btn-lg",
};

const sizePropType = oneOf(Object.values(sizeEnum));
export { iconEnum, iconPositionPropType, iconTypePropType, sizePropType, sizeEnum };
