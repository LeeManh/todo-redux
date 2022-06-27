import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  status: "All",
  priorities: [],
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    filterSearchChange(state, action) {
      state.search = action.payload;
    },
    filterStatusChange(state, action) {
      state.status = action.payload;
    },
    filterPrioritiesChange(state, action) {
      state.priorities = action.payload;
    },
  },
});

export const {
  filterSearchChange,
  filterPrioritiesChange,
  filterStatusChange,
} = filterSlice.actions;

export default filterSlice.reducer;
