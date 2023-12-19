import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      return [
        ...state,
        {
          id: Date.now(),
          todoTask: action.payload,
          isChecked: false,
        },
      ];
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id !== action.payload.id) {
          return todo;
        }
        return {
          ...todo,
          todoTask: action.payload.editedText,
        };
      });
    },
    setCheckedTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          isChecked: !todo.isChecked,
        };
      });
    },
    setAllChecked: (state) => {
      let arr = state.every((todo) => todo.isChecked === true);
      if (arr) {
        return state.map((todo) => {
          return { ...todo, isChecked: false };
        });
      } else {
        return state.map((todo) => {
          return { ...todo, isChecked: true };
        });
      }
    },
  },
});
export const { addTodo, deleteTodo, editTodo, setCheckedTodo, setAllChecked } = todoSlice.actions
export default todoSlice.reducer