import React, {FC} from 'react'
import { ITodo } from '../types/types'


interface ITodoProps{
    todo :ITodo
}
const Todo:FC<ITodoProps> = ({todo}) => {
  return (
    <div>{todo.id},{todo.title},{todo.complete}</div>
  )
}

export default Todo