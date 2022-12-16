import React from "react";
import { string, func, shape, bool } from "prop-types";
import { iconEnumPropType } from "./iconEnum";
import ButtonIcon from "../_shared/ButtonIcon";

export default function DestructiveButton({ text, title, type, icon, onClick, aria, disabled, ...rest }) {
  const tmpAria = aria || { "aria-label": text };
  return (
    <button
      title={title}
      className="btn btn-link"
      type={type}
      onClick={onClick}
      {...tmpAria}
      disabled={disabled}
      {...rest}
    >
      <ButtonIcon
        position="left"
        icon={icon}
      >
        {text}
      </ButtonIcon>
    </button>
  );
}

DestructiveButton.propTypes = {
  text: string.isRequired,
  title: string,
  icon: iconEnumPropType.isRequired,
  type: string,
  onClick: func, // (event)=>any
  // Pass either aria-label or aria-labelledby   https://developers.google.com/web/tools/lighthouse/audits/button-name
  // If aria is undefined, aria-label will be populated by using text prop.
  aria: shape({}),
  disabled: bool,
};

DestructiveButton.defaultProps = {
  title: undefined,
  type: "button",
  onClick: undefined,
  aria: undefined,
  disabled: false,
};
