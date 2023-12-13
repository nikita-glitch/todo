import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: 'todo', 
  initialState: [],
  reducers: {
    addTodo:state => {return {
      ...state,
      todo: {
        id: Date.now(),
        todoTask: input,
        isChecked: false,
      },
    }},
    editTodo:{},
    deleteTodo:{},
    setOneChecked:{},
    setAllChecked:{}
  }
})
export default todoSlice.reducer