import React from "react";
import AddInput from "../smartComponents/AddInput";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";
import { useState } from "react";

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    // e.preventDefault();
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      // dispatch(addTodo(inputValue));
      dispatch(
        addTodo({
          title: inputValue,
          checked: false,
          color: "",
        })
      );
      setInputValue("");
    }
  };

  // const handleEdit = (e) => {
  //   setInputValue(e.target.value);
  // };

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
      <AddInput />
    </>
  );
};

export default Input;
