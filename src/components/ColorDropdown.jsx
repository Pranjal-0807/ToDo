import React from "react";
import { useDispatch } from "react-redux";
import { updateColor } from "../redux/slices/todoSlice";
import { colorArray } from "../utils/colorArray";

const ColorDropdown = ({ index }) => {
  const dispatch = useDispatch();

  const handleColorChange = (e) => {
    const selectedColor = e.target.value;
    dispatch(updateColor({ id: index, color: selectedColor }));
  };

  return (
    <select className="ml-2 border-2 rounded-sm" onChange={handleColorChange}>
      <option value="">Select Color</option>
      {colorArray.map((color) => (
        <option value={color} key={color}>
          {color}
        </option>
      ))}
    </select>
  );
};

export default ColorDropdown;
