// const initialState = [
//   { id: 1, name: "learn Yoga true", completed: true, priority: "Medium" },
//   { id: 2, name: "learn Redux", completed: false, priority: "High" },
//   { id: 3, name: "learn Java", completed: false, priority: "Low" },
// ];

// const todosSlice = (state = initialState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];
//     case "todoList/toggleTodoCompleted":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     default:
//       return state;
//   }
// };

// export default todosSlice;

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "learn Yoga true", completed: true, priority: "Medium" },
  { id: 2, name: "learn Redux", completed: false, priority: "High" },
  { id: 3, name: "learn Java", completed: false, priority: "Low" },
];

const todosSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    toggleTodoCompleted(state, action) {
      const todoChange = state.find((todo) => todo.id === action.payload);
      todoChange.completed = !todoChange.completed;
    },
  },
});

export const { addTodo, toggleTodoCompleted } = todosSlice.actions;

export default todosSlice.reducer;
