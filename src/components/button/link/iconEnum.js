import { oneOf } from "prop-types";

const iconEnum = {
  position: {
    left: "left",
    right: "right",
  },
  type: {
    add: "fal fa-plus-circle",
    insert: "fal fa-layer-plus",
    show: "fal fa-angle-right",
    next: "fal fa-chevron-right",
    hide: "fal fa-times",
    pause: "fal fa-pause-circle",
    reset: "fal fa-undo",
    edit: "fal fa-pencil",
    phone: "fal fa-phone fa-fw",
    sort_down: "fal fa-long-arrow-down",
    sort_up: "fal fa-long-arrow-up",
    chevron_down: "fal fa-chevron-down",
    chevron_up: "fal fa-chevron-up",
  },
};

const iconPositionPropType = oneOf(Object.values(iconEnum.position));
const iconTypePropType = oneOf(Object.values(iconEnum.type));

export { iconEnum, iconPositionPropType, iconTypePropType };
