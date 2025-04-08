import React from "react";

const Button = ({ text, onClick, className = "", disabled = false }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition duration-200 disabled:opacity-50 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
