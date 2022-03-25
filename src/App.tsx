import axios from 'axios'
import  { useEffect ,useState } from 'react'
import List from './generics/List'
import { ITodo, IUser } from './types/types'
import User from './components/User'
import Todo from './components/Todo'
import Home from './page/Home'
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
      console.log(res.data)
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
      <Home />
  </div>
  )
}

export default App