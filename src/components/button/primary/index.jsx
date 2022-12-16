import React from "react";
import { string, func, shape, bool } from "prop-types";
import { iconPositionPropType, iconTypePropType, sizePropType, sizeEnum } from "./enums";

import ButtonIcon from "../_shared/ButtonIcon";

export default function PrimaryButton({ text, title, type, icon = {}, onClick, size, aria, disabled, ...rest }) {
  const tmpAria = aria || { "aria-label": text };

  return (
    <button
      title={title}
      className={`btn ${size} btn-primary`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...tmpAria}
      {...rest}
    >
      <ButtonIcon
        position={icon.position}
        icon={icon.type}
      >
        {text}
      </ButtonIcon>
    </button>
  );
}

PrimaryButton.propTypes = {
  text: string.isRequired,
  title: string,
  icon: shape({
    position: iconPositionPropType.isRequired,
    type: iconTypePropType.isRequired,
  }),
  disabled: bool,
  size: sizePropType,
  type: string, // button or submit
  onClick: func, // (event)=>any
  // Pass either aria-label or aria-labelledby   https://developers.google.com/web/tools/lighthouse/audits/button-name
  // If aria is undefined, aria-label will be populated by using text prop.
  aria: shape({}),
};

PrimaryButton.defaultProps = {
  title: undefined,
  type: "button",
  onClick: undefined,
  aria: undefined,
  icon: undefined,
  size: sizeEnum.standard,
  disabled: false,
};
