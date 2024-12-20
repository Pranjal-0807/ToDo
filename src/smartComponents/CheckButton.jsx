import React from "react";
import { Check } from "lucide-react";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { toggleCheck } from "../redux/slices/todoSlice";

const CheckButton = ({ index }) => {
  const dispatch = useDispatch();
  const checkedStatus = useSelector(
    (store) => store.todo.items.find((item) => item.id === index)?.checked
  );

  const handleCheckBtn = () => {
    dispatch(toggleCheck(index));
  };

  return (
    <Button
      btnText={
        checkedStatus ? (
          <Check className="w-4 h-4 text-green-600 font-bold" />
        ) : null
      }
      cssClass={`w-6 h-6 rounded-full border-2 flex items-center justify-center`}
      handleClick={handleCheckBtn}
    />
  );
};

export default CheckButton;
