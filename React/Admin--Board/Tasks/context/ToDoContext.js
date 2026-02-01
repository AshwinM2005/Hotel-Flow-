import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      isCompleated: false,
      todo: "",
    },
  ],

  addToDo : (todo)=>{},
  deleteToDo : (id)=>{},
  toggleToDo : (id)=>{},
  updateToDo : (todo,id )=>{}
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
