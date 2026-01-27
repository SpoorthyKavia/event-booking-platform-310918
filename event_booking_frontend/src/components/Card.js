import React from "react";
import "./Card.css";

// PUBLIC_INTERFACE
export default function Card({ children, className = "", ...props }) {
  return (
    <div className={`card ${className}`} {...props}>
      {children}
    </div>
  );
}
