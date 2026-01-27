import React from "react";
import classNames from "classnames";
import "./Button.css";

// PUBLIC_INTERFACE
export default function Button({ children, variant = "primary", ...props }) {
  return (
    <button
      className={classNames("btn", {
        "btn-primary": variant === "primary",
        "btn-success": variant === "success",
        "btn-outline": variant === "outline",
        "btn-danger": variant === "danger"
      })}
      {...props}
    >
      {children}
    </button>
  );
}
