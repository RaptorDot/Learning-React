import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "hello world", isComplete: false }],
};

export const todoSlice = createSlice({
  name: "1st Todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid,
        text: action.payload,
        isComplete: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
       state.todos =  state.todos.filter((e)=>(
            e.id!=action.payload
        ))
    },
  },
});

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer

