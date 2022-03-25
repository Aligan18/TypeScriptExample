import React, {FC, useState} from 'react'
import { ITodo } from '../types/types'


interface ITodoProps{
    todo :ITodo
}
const Todo:FC<ITodoProps> = ({todo}) => {
  const [completed, setCompleted] = useState <boolean>(todo.completed)

  const handleClick  = (e:React.ChangeEvent<HTMLInputElement>) => {

      setCompleted(e.target.checked)
  }

  return (
    <div>
  <input onChange={(e)=>handleClick(e)} type="checkbox"   checked={completed}/>
  {todo.id},{todo.title},{completed}
</div>
    
  )
}

export default Todo