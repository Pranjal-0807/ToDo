import React from "react";

const Button = ({ btnText, cssClass, handleClick }) => {
  return (
    <button
      className={cssClass ? cssClass : "appearance-none"}
      onClick={handleClick}
    >
      {btnText}
    </button> 
  );
};

export default Button;
