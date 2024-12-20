import React from "react";

const ColorFilterOption = ({ color, handleClick, isSelected }) => {
  const setColor = {
    Green: "w-5 h-3 bg-green-700 rounded-sm",
    Blue: "w-5 h-3 bg-blue-700 rounded-sm",
    Orange: "w-5 h-3 bg-orange-700 rounded-sm",
    Purple: "w-5 h-3 bg-purple-700 rounded-sm",
    Red: "w-5 h-3 bg-red-700 rounded-sm",
  };

  return (
    <div className="flex items-center space-x-3 mx-4">
      <input
        type="checkbox"
        className="form-checkbox"
        checked={isSelected}
        onChange={handleClick}
      />
      <div className={setColor[color]}></div>
      <div>{color}</div>
    </div>
  );
};

export default ColorFilterOption;
