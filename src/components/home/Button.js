/** @format */

import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["dev-btn--primary", "dev-btn--outline", "dev-btn--test"];

const SIZES = ["dev-btn--medium", "dev-btn--large"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/sign-up" className="dev-btn-mobile">
      <button
        className={`dev-btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
