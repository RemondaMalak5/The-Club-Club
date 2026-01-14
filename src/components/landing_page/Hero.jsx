import React from 'react'
import assets from '../../assets/assets'
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';

const Hero = () => {
  const {t  }= useTranslation();
  return ( 
    <div className='bg-gradient-to-r from-[#1C9D89] to-[#025154] w-full p-6 '>
      <Navbar/>
  <div className=' px-16  flex flex-wrap gap-2'>
     <div className='w-[60%] ' >
               <h1 className='font-bold text-[55px] text-white pe-28 pt-5 '> Choose Your Favorite Branch at The Club Club</h1>
               <p className='font-semibold text-[24px] py-2 pe-32 text-white'>We provide you with a complete sports and social environment suitable for the whole family.</p>
               <button  className='bg-white text-[#00786F] p-3 rounded-xl font-bold mt-8'>
                 {t("Learn More About Our Branches")}
               </button>
       </div>
       <div className='w-[36%] flex gap-6 items-center justify-end '>
             <img src={assets.landingpage_1} className='w-[160px] h-[310px] rounded-tl-[50px] rounded-br-[50px] shadow-[0_0px_12px_#E9F0F0]  '/> 
           <div className='flex flex-col gap-5'>
              <img src={assets.landingpage_2} className='w-[170px] h-[160px] rounded-tl-[50px] rounded-br-[50px] shadow-[0_0px_8px_#E9F0F0]'/> 
             <img src={assets.landingpage_3} className='w-[170px] h-[160px] rounded-tl-[50px] rounded-br-[50px] shadow-[0_0px_8px_#E9F0F0]'/> 
           </div>
       </div>
    </div>
    </div>
  
  )
}

export default Hero
