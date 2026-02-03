

import React, { useEffect } from 'react'
import { useState } from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { useTranslation } from 'react-i18next';
import { siteContactInfo } from '../../axiosConfig/APIs/ContactUs/site_contact_info';
import i18next from 'i18next';
import assets from '../../../../../assets/assets';

const Contactus = () => {
      const { t} = useTranslation();
   const [data,setData]=useState();
   const Get_contactUs =async ()=>{
    const params ={
                  "lang": i18next.language,
    }
    try{
      const response = await siteContactInfo(params);
        console.log(response);
       setData(response.message)
    }
    catch (error){
        console.log("error",error);
        
    }
   }
   useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
      Get_contactUs();
    }, [i18next.language])
    

  return (

    <section    >
     
 <div className='w-full h-[150px]  flex  relative bg-[#014e52] '>
          <div className='w-1/3 h-full flex items-center '>
            <h1 className='text-3xl text-white whitespace-nowrap md:ps-20 ps-5'>{t("Contact_Us")}</h1>
          </div>
          <img src={assets.our_club_bg_2}
          className='cover_2 w-2/3 ' alt="our_club_bg_2"
            style={{
              clipPath: i18next.language === "en" ?
              "polygon(18% 0, 100% 0, 100% 100%, 0% 100%)" :
              "polygon(0 1%, 83% 0, 100% 100%, 0% 100%)"
            }}
          />
        </div>
      <div className='flex flex-wrap py-5'>
        
         <form className='w-full md:w-1/2 md:mx-24 mx-5  '>
          <div className='grid grid-cols-2 py-4 gap-3 '>
            <input placeholder={t("Name")} className='border-2 border-cyan-700 p-3 rounded-md'></input>
            <input placeholder={t("Email")} className='border-2 border-cyan-700 rounded-md p-3'></input>
            <input placeholder={t("Phone")} className='border-2 border-cyan-700 p-3 rounded-md'></input>
            <input placeholder={t("subject")} className='border-2 border-cyan-700 rounded-md p-3'></input>
          </div>
          <textarea type="message" placeholder={t("Message")} className='border-2 border-cyan-700 w-full p-4'></textarea>
          <button type="submit" className='border-2 border-cyan-700 w-52 p-3 rounded-3xl text-center my-3 md:mx-32 mx-40 btn_contactus linear-gradient(to right, #1a9785, #065b5b);'>{t("submit")}</button>
        </form>   
        
       
            <div  className='  md:w-1/4 w-full mx-5   '> 
              <div className='flex flex-col justify-center align-middle text-center bg-[#014e52] p-10 text-white rounded-3xl'>
                 <p className='flex'><span><IoMdMail className='text-xl m-1' /></span > {data?.email}</p>
                 <p className='flex'><span><IoLocation className='text-xl m-1' /></span>{data?.location}</p> 
                 <p className='flex'><span><FaPhoneAlt className='text-lg m-1'/></span>{data?.phone}</p>
                 
              </div>
              
                 
            </div>
        </div>
    </section>
  );
};


export default Contactus