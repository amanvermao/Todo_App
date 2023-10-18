
import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItem } from './components'


function App() {

  const [todos, setTodos] = useState([])
  const addTodo =(todo)=>{
   setTodos((prev)=>[{id:Date.now(), ...todo},...prev])
  }

  const deleteTodo =(id)=>{
    setTodos((prev)=> prev.filter((todo)=> todo.id !== id))

  }
  useEffect(()=>{

   const todos = JSON.parse(localStorage.getItem("todos"))

   if (todos && todos.length > 0) {
    setTodos(todos)
    
   } 
  },[])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])


  

  return ( 

    
    <TodoProvider value={{todos,addTodo,deleteTodo }} >
   <div className="main">
    <h1 className='heading'>Todo List</h1>
    

    <div className="todoForm">
    <TodoForm/>


    </div>

    <div className="items">
   {
    todos.map((todo)=>(
      <div key={todo.id}>

      <TodoItem todo={todo}/>

      </div>

    ))
   }

    </div>
   </div>
   </TodoProvider>
  )
}

export default App
