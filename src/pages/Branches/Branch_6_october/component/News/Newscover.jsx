import React from 'react'
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import NewsContant from './NewsContant';
import assets from '../../../../../assets/assets';

const Newscover = () => {
    const { t } = useTranslation();
  
  return (
    <div className=''>
      <div className='w-full h-96 '>
        <img src={assets.news} className='w-full h-full object-cover brightness-50' />
        
        <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          {t("Our News & Updates")}
        </h2>
        <p
       className='text-md md:text-l lg:text-xl   text-white absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          {t("Stay informed with the latest news, achievements, and announcements from our club")}</p>
      </div>
    </div>
  )
}

export default Newscover