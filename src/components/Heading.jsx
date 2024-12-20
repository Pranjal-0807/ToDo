import React from "react";

const Heading = ({ headingTitle, cssClass }) => {
  return (
    <h1 className={cssClass ? cssClass : "text-red-700 text-center text-2xl "}>
      {headingTitle}
    </h1>
  );
};

export default Heading;
