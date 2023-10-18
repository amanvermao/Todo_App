import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContexts'
import "./TodoForm.css"
import AddIcon from '@mui/icons-material/Add';

const TodoForm = () => {

    const[todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e)=>{
        e.preventDefault()
        if (!todo) return

        addTodo({todo})
        setTodo("")
    }

  return (

    
    <div>
  
      <form onSubmit={add} action="">
        
        <div className="inputs">
        <input type="text"
        placeholder='add todo' 
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className='btn' type="submit"><AddIcon/></button>
          </div>
      </form>
    </div>
  )
}

export default TodoForm
