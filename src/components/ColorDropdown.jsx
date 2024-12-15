import React from "react";
import { colorArray } from "../utils/colorArray";
import DropdownOption from "./DropdownOption";

const ColorDropdown = () => {
  return (
    <select className="ml-2 border-2 rounded-sm">
      {colorArray.map((color) => (
        <DropdownOption color={color} key={color} />
      ))}
    </select>
  );
};

export default ColorDropdown;
