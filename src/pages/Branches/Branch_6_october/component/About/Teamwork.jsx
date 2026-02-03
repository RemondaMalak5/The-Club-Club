import React, { useEffect, useState } from 'react'
import DOMPurify from "dompurify";
import { useTranslation } from "react-i18next";
import { teamwork_content } from '../../axiosConfig/APIs/Teamwork/teamwork_content';
import { mainUrl } from './../../axiosConfig/Instance';
import i18next from 'i18next';

const Teamwork = () => {


    const { t } = useTranslation();
   const [data, setData] = useState();
 
     const teamwork_content_Api = async () => {
          const params = {
            "lang": i18next.language,
            "branch": "نادي النادي - 6 اكتوبر"
          }
          try {
            const response = await teamwork_content(params);
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
      teamwork_content_Api();
    }, [i18next.language])
  
  return (
    <section className='board_member'       
    >   
    <h2 className='px-28 py-5 text-4xl '>{t("Teamwork")}</h2>
    

   <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-40  mb-24'>
     { data?.map((member, index) => (
       <div key={index}  className='flex flex-col items-center justify-center relative  overflow-hidden'> 
         <img src={`${mainUrl}${member.photo}`}  className='h-[90%]' />
               <div  className='info_member text-center p-2'>
                <h1 className='text-lg ' >{member.name}</h1>
                <h6 className='text-xs' >{member.title}</h6>
   <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(member.description)
                }} />               </div>
       </div>
     ))}
   </div>




   
 </section>
  )
}

export default Teamwork