import React,{useEffect,useState} from "react";
import { useSwiper } from "swiper/react";
import styles from "./carouselLeftNavigation.module.css"
import {ReactComponent as LeftArrow} from "../../../assets/LeftArrow.svg";


function CarouselLeftNavigation(){
    const swiper=useSwiper();
    const [isBeginning,setIsBeginning]=useState(swiper.isBeginning);



    useEffect(()=>{
        swiper.on("slideChange",function(){
            setIsBeginning(swiper.isBeginning)
        });
    },[]);
    return(
        <div className={styles.leftNavigation}>
            {!isBeginning && <LeftArrow onClick={()=>swiper.slidePrev()}/>}

        </div>
    ) 
        
}
export default CarouselLeftNavigation;