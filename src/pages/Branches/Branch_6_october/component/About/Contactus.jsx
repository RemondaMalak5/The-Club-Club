
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
  const { t } = useTranslation();
  const [data, setData] = useState();
  const Get_contactUs = async () => {
    const params = {
      "lang": i18next.language,
    }
    try {
      const response = await siteContactInfo(params);
      console.log(response);
      setData(response.message)
    }
    catch (error) {
      console.log("error", error);

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
    <section >
       <div className='w-full h-96 '>
              <img src={assets.contactus} className='w-full h-full object-cover brightness-50' />
              
              <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                {t("Contact Us")}
              </h2>
              <p
             className='text-md md:text-l lg:text-xl text-center  text-white absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                {t("Stay informed with the latest news, achievements, and announcements from our club")}</p>
            </div>

     
       <div className="bg-[#E9F0F0] py-10 px-6 md:px-10 m-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left side: Text + Contact Info */}
        <div className="md:w-1/2 flex flex-col gap-6 text-[#4B4B4B]">
          <h2 className="text-4xl font-semibold">
            <span className="text-[#00786F] font-bold">Get</span> in touch with us anytime
          </h2>
          <p className="text-gray-700">
            Have a question or need support? Get in touch with us anytime we’re here to help and would love to hear from you.
          </p>

          <div className="flex flex-col gap-3 text-gray-700">
            <div className="flex items-center gap-3">
              <IoMdMail className="text-[#00786F] text-xl" />
              <span>info@theclub.com.eg</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#00786F] text-xl" />
              <span>16647</span>
            </div>
            <div className="flex items-center gap-3">
              <IoLocation className="text-[#00786F] text-xl" />
              <span>Al Hay Al Motamayez, 6 October, Giza</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4">
            <div className="w-8 h-8 rounded-full border border-[#00786F] flex items-center justify-center text-[#00786F] cursor-pointer">F</div>
            <div className="w-8 h-8 rounded-full border border-[#00786F] flex items-center justify-center text-[#00786F] cursor-pointer">G</div>
            <div className="w-8 h-8 rounded-full border border-[#00786F] flex items-center justify-center text-[#00786F] cursor-pointer">X</div>
          </div>
        </div>

        {/* Right side: Form */}
        <div className="md:w-1/2 bg-white rounded-2xl shadow-lg p-8 ">
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder={t("Name")} className="border border-gray-300 rounded-md p-3 w-full bg-[#E9F0F0]" />
              <input type="text" placeholder={t("Phone")} className="border border-gray-300 rounded-md p-3 w-full bg-[#E9F0F0]" />
              <input type="email" placeholder={t("Email")} className="border border-gray-300 rounded-md p-3 w-full bg-[#E9F0F0]" />
              <select className="border border-gray-300 rounded-md p-3 w-full bg-[#E9F0F0]">
                <option>Branch</option>
                <option>6 October</option>
                <option>New Cairo</option>
              </select>
            </div>
            <textarea placeholder={t("Write your message")} className="border border-gray-300 rounded-md p-3 w-full h-40 bg-[#E9F0F0]"></textarea>
            <button type="submit" className="bg-[#00786F] text-white p-3 rounded-lg mt-2 hover:bg-[#065b5b] transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>

    </section>
  );
};


export default Contactus