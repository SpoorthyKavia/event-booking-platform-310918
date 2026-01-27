import React from "react";
import "./Modal.css";

// PUBLIC_INTERFACE
export default function Modal({ open, onClose, children, title }) {
  if (!open) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        {title && <div className="modal-title">{title}</div>}
        {children}
        <button className="modal-close-btn" onClick={onClose}>×</button>
      </div>
    </div>
  );
}
