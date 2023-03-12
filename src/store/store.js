import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todo.js";
// our store imports from the redux toolkit
// and exports the configured store containing our reducer for our balance
export default configureStore({
  reducer: {
    todos: todosReducer
  }
});
