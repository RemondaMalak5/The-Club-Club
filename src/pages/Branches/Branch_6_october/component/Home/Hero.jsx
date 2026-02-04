import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getSlider } from '../../axiosConfig/APIs/slider/slider';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import i18next from 'i18next';

const Hero = () => {
  const [data, setData] = useState();
  const SliderAPI = async () => {
    try {
      const response = await getSlider();
      console.log("response121221: ", response)
      setData(response.message.data);
    } catch (error) {
      console.log("error : ", error)
    }
  }
  useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    SliderAPI();
    }, [i18next.language]);
 

  return (
    <div className="max-w-full mx-auto   langingpage" dir={i18next.language === 'ar' ? 'rtl' : 'ltr'}
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        loop
        className="shadow-lg relative  "
      >
        {data?.map((src, index) => (
          <SwiperSlide key={index} className='relative'>
            <div className='absolute bg-black/60 w-full h-full'></div>
            <img
              src={src.attach_opwg}
              alt={`Slide ${index}`}
              className="w-full h-[80vh]"
            />
            <div className='flex justify-center items-center '>
              <div className='flex flex-col  absolute top-[35%] text-center text-white'>
                <h1 className=' text-6xl'>Where Champions Are Made</h1>
                <p className='text-4xl py-2'>Join our community of athletes and fitness enthusiasts.</p>
                <div className='flex gap-10  justify-center pt-10'>
                  <button className=' bg-gradient-to-r from-[#035657] to-[#0A9A9C]  px-8 py-2 rounded-2xl '>Join our club</button>
                  <button className='rounded-2xl px-8 py-2  border border-[#035657] '>Memberships </button>
                </div>
              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
