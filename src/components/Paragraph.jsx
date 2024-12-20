import React from "react";

const Paragraph = ({ paraText, cssClass }) => {
  return (
    <p className={cssClass ? cssClass : "font-bold text-lg text-center my-3"}>
      {paraText}
    </p>
  );
};

export default Paragraph;
