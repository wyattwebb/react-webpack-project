import React from "react";
import { string, func, shape, bool, node } from "prop-types";
import { iconPositionPropType, iconTypePropType, iconEnum } from "./iconEnum";
import ButtonIcon from "../_shared/ButtonIcon";
import "./style.css";

function LinkButton({ text, title, type, icon, onClick, aria, disabled, ...rest }) {
  const tmpAria = aria || { "aria-label": text };
  return (
    <button
      title={title}
      className="btn btn-link link-button "
      type={type}
      onClick={onClick}
      {...tmpAria}
      disabled={disabled}
      {...rest}
    >
      <ButtonIcon
        position={icon && icon.position}
        icon={icon && icon.type}
      >
        {text}
      </ButtonIcon>
    </button>
  );
}

LinkButton.propTypes = {
  text: node.isRequired,
  title: string,
  icon: shape({
    position: iconPositionPropType.isRequired,
    type: iconTypePropType.isRequired,
  }),
  type: string,
  onClick: func, // (event)=>any
  // Pass either aria-label or aria-labelledby   https://developers.google.com/web/tools/lighthouse/audits/button-name
  // If aria is undefined, aria-label will be populated by using text prop.
  aria: shape({}),
  disabled: bool,
};

LinkButton.defaultProps = {
  title: undefined,
  icon: undefined,
  type: "button",
  onClick: undefined,
  aria: undefined,
  disabled: false,
};

export { iconEnum, LinkButton as default };
