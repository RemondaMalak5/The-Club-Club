
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { mainUrl } from '../../axiosConfig/Instance';
import DOMPurify from "dompurify";
import { Championships_Details } from './../../axiosConfig/APIs/Championships/championshipDetails';
import i18next from 'i18next';
import assets from '../../../../../assets/assets';

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
    <section >
      <div >
        <div className='w-full h-[150px] ps-20 flex  relative bg-[#014e52] '>
          <div className='w-1/3 h-full flex items-center '>
            <h1 className='text-3xl text-white whitespace-nowrap '>{t("Championships")}</h1>
          </div>
          <img src={assets.our_club_bg_2}
            className='cover_2 w-2/3 ' alt="our_club_bg_2"
            style={{
              clipPath: i18next.language !== "ar" ?
              "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)" :
              "polygon(0 1%, 83% 0, 100% 100%, 0% 100%)"

            }}
          />
        </div>
      </div>
      <div className='flex flex-wrap ps-10 pt-5'>
        <div className='w-full md:w-1/2 p-10 max-h-[550px] overflow-y-auto'>
          <h2 className='text-2xl font-extrabold my-2'>{data?.title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(data?.description)
            }} />

        </div>
        {(() => {

          const styleObj = i18next.language !== "ar"
            ? { clipPath: "polygon(100% 0,100% 100%,0 100%,22% 71%,0 0)" }
            : { clipPath: "polygon(0% 0%, 100% 0, 74% 71%, 100% 100%, 0% 100%)" };
          return (
            <div className='w-full md:w-1/2 h-[550px]' style={styleObj}>
              <img src={`${mainUrl}${data?.image}`} className='w-full h-[74%]' />
              <div className='bg-[#014E52] h-[25%] '>
                <h2 className='text-center text-white text-xl py-10'>{data?.date}</h2>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  )
}

export default ChampionshipsDetails


