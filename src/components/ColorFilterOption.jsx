import React from "react";

const ColorFilterOption = ({ color }) => {
  return (
    <div className="flex items-center space-x-3 mx-4">
      <input type="checkbox" className="form-checkbox" />
      <div className={`w-5 h-3 bg-${color}-700 rounded-sm`}></div>
      <div>{color}</div>
    </div>
  );
};

export default ColorFilterOption;
