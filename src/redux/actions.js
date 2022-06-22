//acitons are plain JavaScript objects
// export const addTodoAction = {
//   type: "todoList/addTodo",
//   payload: { id: 4, name: "learn Test", completed: false, priorities: "Low" },
// };

//action creators are funtion return a action
export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};
