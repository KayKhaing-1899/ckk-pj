import React, { useEffect,useState } from 'react'
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import axios from 'axios';
import populars from '../populars';
import Popularshow from './Popularshow';

const Popular = () => {

  const [products,setProducts] = useState([])
  useEffect(() => {
    const fetchpros = async () => {
      try{
        const res = await axios.get("http://localhost:8800/products") 
        setProducts(res.data)
      } catch(err) {
        console.log(err)
      }
    }
    fetchpros()
    let count=1
    products.forEach(p => {
      if(count<=10){
        setArr(prev => ([...prev,p]))
      }
      count=count+1
    })
  })

  const [arr,setArr] = useState([])

  return (
    <Swiper
        style={{ overflow: "hidden" , textAlign: 'center' , color:'#111' , fontSize:20}}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      // for responsive
      breakpoints={{
        360: {
          width: 360,
          slidesPerView: 2,
        },
        // when window width is >= 768px
        680: {
          width: 680,
          slidesPerView: 3,
        },
        850: {
          width: 850,
          slidesPerView: 4,
        },
        1100: {
          width: 1100,
          slidesPerView: 5,
        },
        1300: {
          width: 1300,
          slidesPerView: 6,
        },
      }}
      // install Swiper modules
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={7}
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <div className='popular_items'>
        <div className='popular_container'>
          {arr.map((p) => (
            <div>
              <SwiperSlide key={p.Pid}>
                <Popularshow key={p.Pid} {...p} />
              </SwiperSlide>
            </div>
          ))}
        </div>
      </div>
    </Swiper>
  )
}

export default Popular