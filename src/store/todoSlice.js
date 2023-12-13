let initialState = [];
export const todoSlice = (state = initialState, action) => {
  switch (action.type) {
    case 'todo/addTodo':
      return {
        ...state,
        todo: {
          id: Date.now(),
          todoTask: input,
          isChecked: false,
        },
      };
      default: return state;
  }
};
