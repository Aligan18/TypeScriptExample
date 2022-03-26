import React,{FC} from 'react'
import { ISlide } from '../../types/types'
import Slider from '../Slider/Slider'
import classes from './SliderWrapper.module.css'

interface ISliderWrapperProps {
    sliders: ISlide[];
    slideSize: number;
}


const SliderWrapper :FC<ISliderWrapperProps>= ({sliders ,slideSize}) => {
  return (
        <div className={classes.slider_justify_content}>
            <div            style = {{minWidth:`${slideSize}`+"vw" , 
                            maxWidth:`${slideSize}`+"vw"}}
            >
                <Slider sliders={sliders} slideSize ={slideSize}/>
            </div>
        </div>
  )
}

export default  SliderWrapper