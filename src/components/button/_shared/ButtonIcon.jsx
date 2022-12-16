import React from "react";
import { string, oneOf, node } from "prop-types";

export default function ButtonIcon({ icon, position, children }) {
  return (
    <>
      {position && icon && position === "left" && <i className={`${icon} pr-2`} />}
      {children}
      {position && icon && position === "right" && <i className={`${icon} pl-2`} />}
    </>
  );
}

ButtonIcon.propTypes = {
  icon: string,
  position: oneOf(["left", "right"]),
  children: node.isRequired,
};

ButtonIcon.defaultProps = {
  icon: undefined,
  position: undefined,
};
