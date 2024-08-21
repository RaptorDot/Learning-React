import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [{
        id: 1,
        todo: "todo msg",
        isCompleated: false
    }],
    addtodo: (todo)=>{},
    updateTodo: (id , todo)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{}
});

export const useTodo = ()=>{
    return useContext(TodoContext);
}

export const TodoContextProvider = TodoContext.provider;