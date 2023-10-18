import { createContext, useContext } from "react";

export const TodoCotexts = createContext({

    todos:[
        {
            id: 1,
            todo: "Todo msg",
           
        }
    ],
    addTodo: (todo) =>{},
    deleteTodo:(id)=>{}

})

export const useTodo = ()=>{
    return useContext(TodoCotexts)
}

export const TodoProvider = TodoCotexts.Provider