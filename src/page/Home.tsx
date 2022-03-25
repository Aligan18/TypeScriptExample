import React,{FC} from 'react'
import Slider from '../components/Slider/Slider'
import { ISlide } from '../types/types'

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
        <Slider sliders={sliders} />
    </div>
    
  )
}

export default Home