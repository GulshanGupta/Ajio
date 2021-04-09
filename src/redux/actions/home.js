import store from "../store";
import types from "../types";


export const deleteTodo = (id) => ({
    type: types.DELETE,
    id : id
  });