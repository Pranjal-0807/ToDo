import React from "react";
import { useSelector } from "react-redux";
import ColorDropdown from "../components/ColorDropdown";
import DeleteButton from "./DeleteButton";
import Paragraph from "../components/Paragraph";
import CheckButton from "./CheckButton";

const AddInput = () => {
  const todoItems = useSelector((store) => store.todo.items);
  const currentFilter = useSelector((store) => store.todo.filter);
  const currentColorFilter = useSelector((store) => store.todo.colorFilter);

  const filteredItems = todoItems
    .filter((todo) => {
      if (currentFilter === "active") return !todo.checked;
      if (currentFilter === "completed") return todo.checked;
      return true;
    })
    .filter((todo) => {
      if (currentColorFilter) return todo.color === currentColorFilter;
      return true;
    });

  return (
    <div>
      <div className="mx-28 size-3/4 px-4 py-2">
        {filteredItems.map((todo) => (
          <div className="flex justify-between border-b-2" key={todo.id}>
            <div className="flex items-center">
              <CheckButton index={todo.id} />
              <Paragraph paraText={todo.title} cssClass="py-4 ml-2" />
            </div>

            <div className="flex items-center">
              <ColorDropdown index={todo.id} />
              <DeleteButton index={todo.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddInput;
