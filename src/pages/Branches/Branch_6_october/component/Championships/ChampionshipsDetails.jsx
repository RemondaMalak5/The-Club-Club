
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router';
import { mainUrl } from '../../axiosConfig/Instance';
import DOMPurify from "dompurify";
import { Championships_Details } from './../../axiosConfig/APIs/Championships/championshipDetails';
import i18next from 'i18next';
import assets from '../../../../../assets/assets';
import { FaArrowLeft, FaArrowRight, FaEye } from 'react-icons/fa6';
import { HiMiniCalendarDateRange } from 'react-icons/hi2';
import { IoTimeOutline } from 'react-icons/io5';

const ChampionshipsDetails = () => {
    const {  t } = useTranslation();
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const { id } = useParams();
  const ChampionshipsDetails_api =async()=>{
      const params = {
      lang: i18next.language,
      champ_id: id,
      branch: "نادي النادي - 6 اكتوبر",
    };
    try {
      const response = await Championships_Details(params);
      setData(response.message[0]);
      console.log("res", response)
    }
    catch {


    }
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    ChampionshipsDetails_api();
  }, [i18next.language]);


  return (
    <section className='px-7'>
       <Link to="/branches/6-october/Championships" className=' flex gap-2 pb-2 text-[#035657]'>
        {i18next.language === 'ar' ? <FaArrowRight className='py-1 text-2xl' />
          : <FaArrowLeft className='py-1 text-2xl' />}
        <p >Back to Championships</p>
      </Link>
        <img src={`${mainUrl}${data?.image}`} className='w-full h-80  rounded-2xl  object-cover' />
       
      <div className='p-3'>
        <p className='font-bold text-2xl pb-5'>{data?.title}</p>
        <div className='flex flex-wrap gap-6'>
          <p className='text-[#21857C] flex font-semibold text-xl gap-2 '>  <span className='py-1'><HiMiniCalendarDateRange/></span> {data?.date} </p> 
                    <p className='text-[#21857C] flex font-semibold text-xl gap-2 '>  <span  className='py-1'><IoTimeOutline/> </span>{data?.time} 8:00 </p> 
          <p className='text-[#21857C] flex font-semibold text-xl gap-2 '>  <span className='py-1'><FaEye /> </span> {data?.views} 6,200 </p> 
        </div>

      </div>
     
<div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data?.description)
            }} />    
    </section>
  )
}

export default ChampionshipsDetails


