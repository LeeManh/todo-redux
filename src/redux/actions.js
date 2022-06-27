//acitons are plain JavaScript objects
//action creators are funtions return a action
export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};
export const toggleTodoCompleted = (id) => {
  return {
    type: "todoList/toggleTodoCompleted",
    payload: id,
  };
};

export const filterSearchChange = (searchText) => {
  return {
    type: "filters/search",
    payload: searchText,
  };
};

export const filterStatusChange = (status) => {
  return {
    type: "filters/status",
    payload: status,
  };
};

export const filterPrioritiesChange = (priorities) => {
  return {
    type: "filters/priorities",
    payload: priorities,
  };
};
