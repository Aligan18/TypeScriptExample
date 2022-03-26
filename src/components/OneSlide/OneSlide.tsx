import React,{FC} from 'react'
import classes from './OneSlide.module.css'
import {ISlide} from '../../types/types'

interface IOneSlideProps {
    slide : ISlide;
}

const OneSlide :FC<IOneSlideProps>= ({slide}) => {
  return (
    <div className={classes.slide}>
                  
        <div className={classes.img}>
            <img className={classes.img} src={slide.img}/>
        </div>
        <div className={classes.title}>
            <h1>{slide.title}</h1>
        </div>
    </div>
  )
}

export default OneSlide