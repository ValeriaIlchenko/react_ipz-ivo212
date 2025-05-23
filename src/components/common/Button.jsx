import React from "react";

const Button = ({ label, onClick, type = "button", style = {} }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "8px 16px",
        backgroundColor: "#0057b7",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        ...style,
      }}
    >
      {label}
    </button>
  );
};

export default Button;
