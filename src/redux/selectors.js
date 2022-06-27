import { createSelector } from "@reduxjs/toolkit";

export const todoListSelector = (state) => state.todoList;

export const filtersSearchSelector = (state) => state.filters.search;

export const filtersStatusSelector = (state) => state.filters.status;

export const filtersPrioritiesSelector = (state) => state.filters.priorities;

export const todoListRemaning = createSelector(
  todoListSelector,
  filtersSearchSelector,
  filtersStatusSelector,
  filtersPrioritiesSelector,
  (todoList, searchText, status, priorities) => {
    return todoList.filter((todo) => {
      if (status === "All")
        return (
          todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
          (priorities.length > 0 ? priorities.includes(todo.priority) : true)
        );
      else {
        return (
          todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
          (todo.completed ? "Completed" : "Todo") === status &&
          (priorities.length > 0 ? priorities.includes(todo.priority) : true)
        );
      }
    });
  }
);
