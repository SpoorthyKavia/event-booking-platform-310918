import React from "react";
import classNames from "classnames";
import "./Input.css";

// PUBLIC_INTERFACE
export default function Input({ label, error, ...props }) {
  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      <input className={classNames("form-input", { "form-error": error })} {...props} />
      {error && <div className="input-error-msg">{error}</div>}
    </div>
  );
}
