import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        id: state.items.length + 1,
        title: action.payload.title,
        checked: false,
        color: "",
      });
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((_, index) => index !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, title, checked, color } = action.payload;
      const existingTodo = state.items.find((item) => item.id === id);
      if (existingTodo) {
        existingTodo.title = title;
        existingTodo.checked = checked;
        existingTodo.color = color;
      }
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
