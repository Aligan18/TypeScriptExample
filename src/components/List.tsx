import React, { FC } from 'react'
import {IUser} from '../types/types'

interface IListProps{
    arrayItems: IUser[];

}


const List:FC<IListProps> = ({arrayItems}) => {

  
  return (
    <div>List</div>
  )
}

export default List