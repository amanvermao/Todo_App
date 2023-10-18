import React, { useState } from 'react'
import { useTodo } from '../contexts'
import "./Todoitem.css"
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({todo}) => {

    const [todoMsg, setTodoMsg] = useState(todo.todo)


    const {deleteTodo} = useTodo()


  return (
    <div className='items'>
            <div className="data">
              <h1 className='todo'>{todoMsg}</h1>
              <button className='btn2' onClick={() => deleteTodo(todo.id)}><DeleteIcon/></button>
            </div>

    
    </div>
  )
}

export default TodoItem
