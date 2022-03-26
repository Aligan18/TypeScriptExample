import React ,{FC, useState} from 'react'
import {ISlide} from '../../types/types'
import OneSlide from '../OneSlide/OneSlide'
import classes from './Slider.module.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
interface ISliderProps {
    sliders : ISlide[];
    slideSize:number;
}


const Slider:FC<ISliderProps> = ({sliders, slideSize}) => {

    const [indexSlide, setIndexSlide] =useState<number>(0)

        
    const calculateSlidePosition  =():string=>{
      let activeSlide = -(indexSlide * slideSize)
      return `${activeSlide}`+"vw"
    }

    const clickOnArrow=(direction:string)=>{
          let newIndex:number;
          if(direction==="left"){
              newIndex= indexSlide-1
              setIndexSlide(checkSiderRange(newIndex))
          }
          else if (direction==="right"){
            newIndex= indexSlide+1
            setIndexSlide(checkSiderRange(newIndex))
          }
    }


    const checkSiderRange =(newIndex:number):number=>{
      if (newIndex>sliders.length-1){
          return 0
      }
      else if (newIndex<0){
        return sliders.length-1
      }
      else{
        return newIndex
      }
    }


  return (
      <div className={classes.main_wrapper}> 
     
        <div className={classes.window}>
        <div onClick={()=>clickOnArrow("left")} className={classes.button_left}><ArrowBackIosIcon/></div>
          <div style={{transform:`translateX(${calculateSlidePosition()})`}} className={classes.wrapper}>
            
            {sliders.map(slide=>
               <OneSlide slide={slide}/>
                )}
                
        </div> 
        <div onClick={()=>clickOnArrow("right")} className={classes.button_right}><ArrowForwardIosIcon/></div> 
        
      </div>
    
    </div>
  
   
  )
}

export default Slider