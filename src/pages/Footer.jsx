import React from "react";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import ColorFilterOption from "../components/ColorFilterOption";
import { useSelector, useDispatch } from "react-redux";
import {
  markAllCompleted,
  clearCompleted,
  setFilter,
  setColorFilter,
} from "../redux/slices/todoSlice";
import { colorArray } from "../utils/colorArray";

const Footer = () => {
  const dispatch = useDispatch();
  const todoItems = useSelector((store) => store.todo.items);
  const currentFilter = useSelector((store) => store.todo.filter);
  const currentColorFilter = useSelector((store) => store.todo.colorFilter);

  const filteredItems = todoItems
    .filter((item) => {
      if (currentFilter === "active") return !item.checked;
      if (currentFilter === "completed") return item.checked;
      return true;
    })
    .filter((item) => {
      if (currentColorFilter) return item.color === currentColorFilter;
      return true;
    });

  const handleSetFilter = (filter) => {
    dispatch(setFilter(filter));
  };

  const handleSetColorFilter = (color) => {
    if (color === currentColorFilter) {
      dispatch(setColorFilter(""));
    } else {
      dispatch(setColorFilter(color));
    }
  };

  const handleMarkAllCompleted = () => {
    dispatch(markAllCompleted());
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <>
      <div className="border-t-4">
        <div className="flex justify-between">
          <div>
            <Paragraph paraText="Actions" />
            <Button
              btnText="Mark All Completed"
              handleClick={handleMarkAllCompleted}
            />
            <br />
            <Button
              btnText="Clear Completed"
              handleClick={handleClearCompleted}
            />
          </div>

          <div>
            <Paragraph paraText="Remaining Todos" />
            <Paragraph
              cssClass={"text-center"}
              paraText={`${filteredItems.length} items left`}
            />
          </div>

          <div>
            <Paragraph paraText="Filter by Status" />
            <div className="text-center">
              <Button
                btnText="All"
                handleClick={() => handleSetFilter("all")}
                cssClass={currentFilter === "all" ? "font-bold underline" : ""}
              />
              <br />
              <Button
                btnText="Active"
                handleClick={() => handleSetFilter("active")}
                cssClass={
                  currentFilter === "active" ? "font-bold underline" : ""
                }
              />
              <br />
              <Button
                btnText="Completed"
                handleClick={() => handleSetFilter("completed")}
                cssClass={
                  currentFilter === "completed" ? "font-bold underline" : ""
                }
              />
            </div>
          </div>

          <div>
            <Paragraph paraText="Filter by Color" />
            <div className="space-y-3">
              {colorArray.map((color) => (
                <ColorFilterOption
                  key={color}
                  color={color}
                  handleClick={() => handleSetColorFilter(color)}
                  isSelected={currentColorFilter === color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
