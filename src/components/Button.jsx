import React from "react";

const Button = ({ label, className, textColor }) => {
  return (
    <button
      className={`bg-white px-6 py-2 rounded-full font-semibold  hover:text-primary ${className}`}
      style={{ color: textColor }}
    >
      {label}
    </button>
  );
};

export default Button;
