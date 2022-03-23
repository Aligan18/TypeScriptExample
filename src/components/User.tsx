import React,{ FC} from 'react'
import {IUser} from '../types/types'

interface UserItemsProps{
    user:IUser
}

const User :FC<UserItemsProps> = ({user}) => {
  return (
    <div>{user.name} , {user.email}, {user.username}</div>
  )
}

export default User