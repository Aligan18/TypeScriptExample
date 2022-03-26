import React,{FC} from 'react'
import OneSlide from '../components/OneSlide/OneSlide'

import { ISlide } from '../types/types'
import classes from './Home.module.css'
import SliderWrapper from '../components/SliderWrapper/SliderWrapper'

const Home:FC = () => {

    const sliders : ISlide[] = [
        {
            img:"https://www.technodom.kz/under/banners/gs22-1318.png",
            title:""
        },
        {
            img:"https://www.technodom.kz/under/banners/iphone-se-2022/iphone-se1318.jpg",
            title:""
        },

        {
            img:"https://www.technodom.kz/under/banners/ipad-air1318.jpg",
            title:""
        }

    ]

    

  return (
    <div>
        <SliderWrapper slideSize={60} sliders={sliders}/>
        
    </div>
    
  )
}

export default Home