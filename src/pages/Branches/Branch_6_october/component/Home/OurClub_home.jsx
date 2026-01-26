import React, { useState, useEffect } from "react";
import assets from "./../../assets/assets";
import { useTranslation } from "react-i18next";
import { our_club } from "./../../axiosConfig/APIs/ourClub/Our_club";
import DOMPurify from "dompurify";
import i18next from "i18next";
import { FaBullseye, FaLocationDot } from "react-icons/fa6";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaChartArea } from "react-icons/fa6";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import Title_1 from "../Shared_Components/Title_1";


const OurClub_home = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const ourClub_api = async () => {
     const params = {
        lang: i18next.language,
        branch: "نادي النادي - 6 اكتوبر",
      };
    try {
      const response = await our_club(params);
      console.log("re", response.message)      
      setData(response.message || []);
    } catch (error) {
      console.error("error :", error);
    }
  };
useEffect(() => {
    ourClub_api();
  }, [i18next.language]);
  const cleanDescription = DOMPurify.sanitize(data?.[0]?.intro || "", {
    ALLOWED_ATTR: [],
  });

  const arr = [
    { title: "6 Oct City", icon: <FaLocationDot />, description: "Near Juhayna Square" },
    { title: "+80,000 ", icon: <BsFillPersonLinesFill />, description: "Active Members" },
    { title: "20 Feddan", icon: <FaChartArea />, description: "Total Area" },
    { title: "+12 Sports", icon: <FaBullseye />, description: " Diverse programs" },

  ]

  return (
    <section className="px-24" dir={i18next.language !== "ar" ? "ltr" : "rtl"}>
      <Title_1 title={t("our_club")}/>
      <div className="flex flex-col gap-4 pt-2">
        {data?.map((item, index) => (
          <div key={index} className="text-gray-600 text-center">
            <div dangerouslySetInnerHTML={{ __html: cleanDescription }} />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 justify-center  p-10" >
        {arr?.map((e, index) => (
          <div className="flex flex-col xl:w-1/6 md:w-1/3 sm:w-1/2 w-full items-center"key={index}> 
          <div className=" w-[80px] h-[80px] bg-[#E9F0F0] rounded-full text-4xl text-[#21857C] " >
             <p className=" flex justify-center items-center p-5"> {e.icon}</p>
          </div>
          <p className="text-xl font-bold py-1">{e.title}</p>
          <p className="text-gray-600 text-center">{e.description}</p>
          </div>
        ) )}
      </div>
    </section>
  );
};

export default OurClub_home;
