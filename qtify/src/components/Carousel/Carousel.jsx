

import { Navigation} from 'swiper/modules';

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import styles from './Carousel.module.css';
import React,{ useEffect } from 'react';

import 'swiper/css'
 import CarouselLeftNavigation  from './CarouselLeftNavigation/CarouselLeftNavigation';
 import  CarouselRightNavigation  from './CarouselRightNavigation/CarouselRightNavigation';

const Controls = ({ data }) => {
   
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0);
  }, [data]);
  return <></>;
};
const Carousel = ({ data,renderComponent }) => {
  return (
    <div className={styles.Wrapper}>
      <Swiper
        initialSlide={0}
        modules={{ Navigation }}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />
        <CarouselLeftNavigation/>
        <CarouselRightNavigation/>
        {data.map((item)=>(
            <SwiperSlide>{renderComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;