import React from "react";

const AddInput = ({ paragraphs, setParagraphs }) => {
  const handleDelete = (index) => {
    setParagraphs(paragraphs.filter((_, i) => i !== index));
  };
  const handleCheck = (e) => {
    e.target.classList.toggle("bg-green-500");
  };
  return (
    <div>
      <div className="mx-28 size-3/4 px-4 py-2">
        <div>
          {paragraphs.map((text, index) => (
            <div className="flex justify-between border-b-2" key={index}>
              <div className="flex items-center">
                <div
                  className="w-4 h-4 border rounded-lg cursor-pointer"
                  onClick={handleCheck}
                ></div>
                <p className="py-4 ml-2">{text}</p>
              </div>
              <div className="flex items-center">
                <select className="ml-2 border-2 rounded-sm">
                  <option value="empty"></option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                  <option value="orange">Orange</option>
                  <option value="purple">Purple</option>
                  <option value="red">Red</option>
                </select>
                <div
                  className="ml-2 cursor-pointer"
                  onClick={() => handleDelete(index)}
                >
                  ❌
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddInput;
