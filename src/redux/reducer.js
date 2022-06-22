const initialState = {
  filters: {
    search: "",
    status: "All",
    priorities: [],
  },
  todoList: [
    { id: 1, name: "learn Yoga", completed: false, priority: "Medium" },
    { id: 2, name: "learn Redux", completed: true, priority: "Hight" },
    { id: 3, name: "learn Java", completed: false, priority: "Low" },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return { ...state, todoList: [...state.todoList, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;
