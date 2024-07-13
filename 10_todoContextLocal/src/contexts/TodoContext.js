import { createContext, useContext, useContext } from "react"; 

export const TodoContext = createContext({
    to_dos: [
             {
                id: 1,
                todoText: "Todo msg",
                isComplete: false
             },
            ],
    addToDO: (todoText)=>{},
    updateTodo: (id,todoText)=>{},
    deleteTodo: (id)=>{},
    toggleComplete: (id)=>{}
})

export const useTodo = ()=> {
        return useContext(TodoContext);
}

export const ToDoProvider = TodoContext.Provider