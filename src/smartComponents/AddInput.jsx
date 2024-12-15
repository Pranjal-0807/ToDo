import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ColorDropdown from "../components/ColorDropdown";
import { deleteTodo, editTodo } from "../redux/slices/todoSlice";

const AddInput = () => {
  const todoItems = useSelector((store) => store.todo.items);
  // console.log(todoItems);

  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
  };

  const handleCheck = (e) => {
    e.target.classList.toggle("bg-green-500");
  };

  // Edit Logic
  const handleEdit = (index) => {
    // dispatch(editTodo(index));
    dispatch(
      editTodo({
        id: index,
        title: "New Title",
        checked: false,
        color: "",
      })
    );
  };

  return (
    <div>
      <div className="mx-28 size-3/4 px-4 py-2">
        <div>
          {todoItems.map((text, index) => (
            <div className="flex justify-between border-b-2" key={index}>
              <div className="flex items-center">
                <div
                  className="w-4 h-4 border rounded-lg cursor-pointer"
                  onClick={handleCheck}
                ></div>
                <p className="py-4 ml-2">{text.title}</p>
              </div>

              <div className="flex items-center">
                <ColorDropdown />

                {/* Edit Logic */}
                <button className="ml-2" onClick={() => handleEdit(index)}>
                  📝
                </button>

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
