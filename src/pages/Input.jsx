import React from "react";
import { useDispatch } from "react-redux";
import AddInput from "../smartComponents/AddInput";
import { addTodo } from "../redux/slices/todoSlice";

const Input = () => {
  const dispatch = useDispatch();

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      dispatch(
        addTodo({
          title: e.target.value.trim(),
        })
      );
      e.target.value = "";
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="What needs to be done?"
        className="mx-28 size-3/4 px-4 py-4 border-b-2"
        onKeyPress={handleKeyPress}
      />
      <AddInput />
    </>
  );
};

export default Input;
