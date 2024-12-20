import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    items: [],
    filter: "all",
    colorFilter: "",
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        id: state.items.length + 1,
        title: action.payload.title,
        checked: false,
        color: action.payload.color || "",
      });
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    toggleCheck: (state, action) => {
      const todo = state.items.find((item) => item.id === action.payload);
      if (todo) {
        todo.checked = !todo.checked;
      }
    },
    markAllCompleted: (state) => {
      state.items.forEach((item) => {
        item.checked = true;
      });
    },
    clearCompleted: (state) => {
      state.items = state.items.filter((item) => !item.checked);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setColorFilter: (state, action) => {
      state.colorFilter = action.payload;
    },
    updateColor: (state, action) => {
      const { id, color } = action.payload;
      const todo = state.items.find((item) => item.id === id);
      if (todo) {
        todo.color = color;
      }
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  toggleCheck,
  markAllCompleted,
  clearCompleted,
  setFilter,
  setColorFilter,
  updateColor,
} = todoSlice.actions;

export default todoSlice.reducer;
