import React from 'react'


interface IListProps<T>{
    array: T[] ;
    renderItem: (item: T) =>React.ReactNode ;

}


export default function List <T> (props: IListProps<T>)  {

  
  return (

    <div>
        {props.array.map(props.renderItem)} 
    </div>
  )
}

