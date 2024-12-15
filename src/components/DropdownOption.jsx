import React from "react";

const DropdownOption = ({ color }) => {
  return <option value={`${color}`}>{color}</option>;
};

export default DropdownOption;
