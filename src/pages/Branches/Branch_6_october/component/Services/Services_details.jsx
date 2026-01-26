import React from 'react'
import assets from '../../assets/assets'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import i18next from 'i18next';
import { i18n, useTranslation } from 'next-i18next';
import Services_booking from './Services_booking';
import Services_detail_contant from './Services_detail_contant';
import { Link } from 'react-router';

const Services_details = () => {
  const { i18n } = useTranslation();
  return (
    <div className='px-10'>
      <Link to="/services" className=' flex gap-2 pb-2 text-[#035657]'>
        {i18n.language === 'ar' ? <FaArrowRight className='py-1 text-2xl' />
          : <FaArrowLeft className='py-1 text-2xl' />}
        <p >Back to services</p>
      </Link>
      <img src={assets.services_2} className='w-full h-96  rounded-2xl' />

      <div className='flex flex-wrap gap-14 justify-between px-5 py-5'>
        <Services_detail_contant/>
         <Services_booking />
      </div>
    </div>
  )
}

export default Services_details
