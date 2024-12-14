import React from "react";
import { useState } from "react";
import AddInput from "./AddInput";

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const [paragraphs, setParagraphs] = useState([]);
  const handleSubmit = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      setParagraphs([...paragraphs, inputValue]);
      setInputValue("");
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="What needs to be done?"
        className="mx-28 size-3/4 px-4 py-4 border-b-2"
        value={inputValue}
        onChange={handleSubmit}
        onKeyPress={handleKeyPress}
      />
      <AddInput paragraphs={paragraphs} setParagraphs={setParagraphs} />
    </>
  );
};

export default Input;
