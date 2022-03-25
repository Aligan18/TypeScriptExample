import React ,{FC} from 'react'
import {ISlide} from '../../types/types'
import classes from './Slider.module.css'

interface ISliderProps {
    sliders : ISlide[]

}


const Slider:FC<ISliderProps> = ({sliders}) => {
        



  return (
    <div className={classes.wrapper}>
        <div className={classes.button_left}>лево</div>
        {sliders.map(slide=>
             <div className={classes.slide}>
                <div className={classes.img}>
                    <img className={classes.img} src={slide.img}/>
                </div>
                <div className={classes.title}>
                    <h1>{slide.title}</h1>
                </div>
            </div>
            )}
       <div className={classes.button_right}>право</div>
    </div>
  )
}

export default Slider