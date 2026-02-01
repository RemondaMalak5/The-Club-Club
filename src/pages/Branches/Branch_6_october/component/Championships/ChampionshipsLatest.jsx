import React, { useEffect } from 'react'
import { useState } from 'react';
import { get_club_championships } from '../../axiosConfig/APIs/Championships/Championships';
import { useTranslation } from "react-i18next";
import { mainUrl } from '../../axiosConfig/Instance';
import { Link, useParams } from 'react-router';
import i18next from 'i18next';
import { HiMiniCalendarDateRange } from 'react-icons/hi2';
import DOMPurify from "dompurify";
import Btn_1 from '../../../../../components/Shared_Componant/Btn_1';
import LoaderSpinner from '../../../../../components/Shared_Componant/LoaderSpinner';

const ChampionshipsLatest = () => {
  const { t } = useTranslation();
  const { champ_id } = useParams();
  const [data, setData] = useState();

  const Championship_Api = async () => {
    const params = {
      "lang": i18next.language,
      "branch": "نادي النادي - 6 اكتوبر"
    }
    try {
      const response = await get_club_championships(params);
      console.log("response : ", response)
      setData(response.message);
    } catch (error) {
      console.log("error : ", error)
    }
  }
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    Championship_Api();
  }, [i18next.language]);

  return (

    <section>
      <div className='Loyalty  w-full md:px-28 py-16 px-5'>
        <h2 className='text-5xl mb-10  '>{t("last_championships")}</h2>
        <div className="  rounded-2xl w-full ">
          {data ?
         <div className=' flex flex-wrap   '>
          {data?.map((e, index) => (
            <Link to={`/branches/6-october/Championships/${e.champ_id}`} className="xl:w-1/3 w-full px-2 " key={index}>
              <div className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden " >
                <img
                  src={`${mainUrl}${e.image}`}
                  alt="صورة"
                  className="w-full h-60 object-cover"
                />
                <div className="px-3 py-3">
                  <div className="flex text-[#21857C] text-lg ">
                    <span className="p-1"><HiMiniCalendarDateRange /></span>
                    <p>{e.date}</p>
                  </div>
                  <h5 className="text-lg font-bold mb-1 text-black">{e.title} </h5>
                  <div className='line-clamp-2'
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(e.description)
                    }}
                  />
          <Btn_1 title={t("Read_more")}/>
                </div>
              </div>
            </Link>
          ))}
        </div>
            
            :
            <div className='w-full h-[50vh] flex items-center justify-center'>
              <LoaderSpinner/>
            </div>
          }
        </div>

      </div>

    </section>
  )
}

export default ChampionshipsLatest



