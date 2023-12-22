import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: { todos: [], filter: "all" },
  reducers: {
    todoAdded(state, action) {
      state.todos.push({
        id: Date.now(),
        todoTask: action.payload,
        isChecked: false,
      });
    },
    todoDeleted(state, action) {
      const id = action.payload;
      let index = state.todos.findIndex((todo) => todo.id === id);
      state.todos.splice(index, 1);
      //return ({todos: state.todos.filter((todo) => todo.id !== id), filter: state.filter});
    },
    todoEdited(state, action) {
      const { id, editedText } = action.payload;
      let todo = state.todos.find((todo) => todo.id === id);
      todo.todoTask = editedText;
    },
    todoSettedChecked(state, action) {
      const id = action.payload;
      let todo = state.todos.find((todo) => todo.id === id);
      todo.isChecked = !todo.isChecked;
    },
    settedAllChecked(state) {
      let arr = state.todos.every((todo) => todo.isChecked);
      if (arr) {
        state.todos.forEach((todo) => {
          todo.isChecked = false;
        });
      } else {
        state.todos.forEach((todo) => {
          todo.isChecked = true;
        });
      }
    },
    settedFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
export const {
  todoAdded,
  todoDeleted,
  todoEdited,
  todoSettedChecked,
  settedAllChecked,
  settedFilter,
} = todoSlice.actions;
export default todoSlice.reducer;
