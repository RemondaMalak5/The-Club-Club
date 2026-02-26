import React from 'react'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import NewsContant from './NewsContant';
import assets from '../../../../../assets/assets';

const Newscover = () => {
    const { t } = useTranslation();
  
  return (
    
        <div className='w-full h-96 relative'>
  <img src={assets.news} className='w-full h-full object-cover brightness-50' />
  
  <div className='absolute inset-0 flex flex-col justify-center items-center text-center px-4'>
    <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white'>
      {t("Our News & Updates")}
    </h2>
    <p className='text-md md:text-lg lg:text-xl text-white mt-4'>
      {t("Stay informed with the latest news, achievements, and announcements from our club")}
    </p>
  </div>
</div>
  )
}

export default Newscover