import axios from 'axios'
import React, { useEffect ,useState } from 'react'
import List from './generics/List'
import { ITodo, IUser } from './types/types'
import User from './components/User'
import Todo from './components/Todo'

const App = () => {
  const [users , setUsers] = useState<IUser[]>([])
  const [todos , setTodos] = useState<ITodo[]>([])
  const fetchUsers = async()=>{
    try {
      const res = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users")
      setUsers(res.data)
    } catch (error) {
      console.log(error)
    }
      
  }

  const fetchTodo  = async()=>{
    try {
      const res = await axios.get<ITodo[]>("https://jsonplaceholder.typicode.com/todos?_limit=10")
    setTodos(res.data)
      
    } catch (error) {
      console.log(error)
    }
    
}
 
  useEffect(()=>{
    
    fetchUsers()
    fetchTodo()
  },[])
  


  return (
  <div>
    <List array={users} renderItem={(user:IUser)=><User user={user}/>}/>
    <List array={todos} renderItem={(todo:ITodo)=><Todo todo={todo}/>}/>
  </div>
  )
}

export default App