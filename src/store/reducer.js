import authors from "../data";

const initialState = {
  authors: authors,
  newAuthorId: 1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_AUTHOR":
      console.log("add_author");
      return {
        ...state,
        authors: state.authors.concat([action.payload]),
        newAuthorId: state.newAuthorId + 1
      };
    case "DELETE_AUTHOR":
      return {
        ...state,
        authors: state.authors.filter(a => a !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
