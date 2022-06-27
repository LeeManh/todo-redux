import { combineReducers } from "redux";

import todosSlice from "../components/TodoList/TodosSlice";
import filterSlice from "../components/TodoFilter/FilterSlice";

const rootReducer = combineReducers({
  todoList: todosSlice,
  filters: filterSlice,
});

export default rootReducer;
