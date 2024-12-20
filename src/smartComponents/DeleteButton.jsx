import React from "react";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/slices/todoSlice";

const DeleteButton = ({ index }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(index));
  };

  return <Button btnText="❌" cssClass={"ml-2"} handleClick={handleDelete} />;
};

export default DeleteButton;
