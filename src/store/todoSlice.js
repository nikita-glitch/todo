import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    todoAdded(state, action) {
      return [
        ...state,
        {
          id: Date.now(),
          todoTask: action.payload,
          isChecked: false,
        },
      ];
    },
    todoDeleted(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
    todoEdited(state, action) {
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
    todoSettedChecked(state, action) {
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
    settedAllChecked(state) {
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
export const { todoAdded, todoDeleted, todoEdited, todoSettedChecked, settedAllChecked } = todoSlice.actions
export default todoSlice.reducer