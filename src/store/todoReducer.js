let initialState = [];

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todo/addTodo":
      return [
        ...state,
        {
          id: Date.now(),
          todoTask: action.payload,
          isChecked: false,
        },
      ];
    case "todo/deleteTodo":
      let filteredBuf = state.filter((todo) => todo.id !== action.payload);
      return filteredBuf;
    case "todo/editTodo":
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          todoTask: action.editText
        }
      });
    case "todo/setCheckedTodo":
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }
        return {
          ...todo,
          isChecked: !todo.isChecked,
        };
      });
    case "todo/setAllChecked":
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
    default:
      return state;
  }
};
