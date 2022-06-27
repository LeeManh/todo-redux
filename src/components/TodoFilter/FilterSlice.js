const initialState = {
  search: "",
  status: "All",
  priorities: [],
};

const filterSlice = (state = initialState, action) => {
  switch (action.type) {
    case "filters/search":
      return {
        ...state,
        search: action.payload,
      };
    case "filters/status":
      return {
        ...state,
        status: action.payload,
      };
    case "filters/priorities":
      return {
        ...state,
        priorities: action.payload,
      };
    default:
      return state;
  }
};

export default filterSlice;
