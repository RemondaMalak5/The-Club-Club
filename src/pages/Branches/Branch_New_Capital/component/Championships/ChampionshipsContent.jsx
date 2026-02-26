import React from 'react'
import assets from '../../../../../assets/assets'
import { useTranslation } from 'react-i18next';

const ChampionshipsContent = () => {
  const { t } = useTranslation();
  return (
   <section >
     <div className='w-full h-96 relative'>
  <img src={assets.champanship} className='w-full h-full object-cover brightness-50' />
  
  <div className='absolute inset-0 flex flex-col justify-center items-center text-center px-4'>
    <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white'>
      {t("Our Championships")}
    </h2>
    <p className='text-md md:text-lg lg:text-xl text-white mt-4'>
      {t("Stay informed with the latest news, achievements, and announcements from our club")}
    </p>
  </div>
</div>

    </section>
  )
}

export default ChampionshipsContent