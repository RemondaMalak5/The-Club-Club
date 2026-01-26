import React, { useEffect, useState } from "react";
import assets from "./../../assets/assets";
import { useTranslation } from "react-i18next";
import Error_Template from "../Shared_Components/Error_Template";
import { offers_detais } from "../../axiosConfig/APIs/offers/offers_detais";
import { useParams } from "react-router";
import { mainUrl } from "../../axiosConfig/Instance";
import  DOMPurify  from 'dompurify';
import i18next from "i18next";

const LoyaltyDetails = () => {
  const { t } = useTranslation();

  const [data, setData] = useState();
  const [error, setError] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    offers_details_Api();
  }, [i18next.language]);

  const offers_details_Api = async () => {
    const params = {
      lang: i18next.language,
     offers_id : id,
      branch: "نادي النادي - 6 اكتوبر",
    };
    try {
      const response = await offers_detais(params);
      console.log("response : ", response.message);
      setData(response.message[0]);
    } catch (error) {
      console.log("error : ", error);
      setError(true);
    }
  };
 const cleanDescription = DOMPurify.sanitize(data?.[0]?.description, {
   ALLOWED_ATTR: [], // Remove all attributes like class, style, etc.
   });
   
  return (
     <section >
      <div >
        
       <div className='w-full h-[150px] ps-20 flex  relative bg-[#014e52] '>
          <div className='w-1/3 h-full flex items-center '>
            <h1 className='text-3xl text-white whitespace-nowrap '>{t("Loyalty")}</h1>
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
        <div className='w-full md:w-1/2 p-10 max-h-[550px] overflow-y-auto relative'>
         <div  className={`absolute top-0  left-5 w-[40%] ${
    i18next.language === "en" ? " rounded-br-xl" : " rounded-bl-xl"
  } bg-yellow-300 text-2xl font-bold text-black px-3 py-2 z-10`}>
                        <p>{data?.discount_value + ` % ${t("discount")}`}</p>

                  </div>
          <h2 className='text-2xl font-extrabold my-5'>{data?.title}</h2>
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
  );
};

export default LoyaltyDetails;
