import i18next from 'i18next';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import DOMPurify from "dompurify";
import { FaBullseye, FaChartArea, FaLocationDot } from 'react-icons/fa6';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Title_2 from '../Shared_Componant/Title_2';
import  About_API  from '../../axiosConfig/API/landing_page/About';

const Our_Club = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const OurClub_api = async () => {
    setLoading(true);
    const params = {
      lang: i18next.language,
      branch: "نادي النادي - 6 اكتوبر",
    };
    try {
      const response = await About_API(params);
      setData(response.message || []);
    } catch (error) {
      console.error("error :", error);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    OurClub_api()
  }, [i18next.language]);
const cleanDescription = DOMPurify.sanitize(data?.[0]?.description || "", {
    ALLOWED_ATTR: [],
  });
  const stats = [
    { title: "3", icon: <FaLocationDot />, description: "Premium Branches" },
    { title: "+ 15,000", icon: <BsFillPersonLinesFill />, description: "Active Members" },
    { title: "+ 20", icon: <FaChartArea />, description: "Certified Trainers" },
    { title: "World-Class", icon: <FaBullseye />, description: "Diverse programs" },
  ];

  return (
    <section className="px-24 py-5" dir={i18next.language !== "ar" ? "ltr" : "rtl"}>
      <Title_2 title={t("our_club")} />

      <div className="flex flex-col gap-4 px-28">
        {data?.map((item, index) => (
          <div key={index} className="text-gray-600 text-center">
            <div dangerouslySetInnerHTML={{ __html: cleanDescription }} />
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 justify-center p-10">
        {stats.map((e, index) => (
          <div key={index} className="bg-white flex flex-wrap gap-2 rounded-xl p-2 shadow-[0_5px_15px_#E9F0F0] w-56">
            <span className="text-white bg-[#009689] p-4 rounded-lg text-[22px]">{e.icon}</span>
            <div>
              <h2 className="text-[#00786F] font-bold">{e.title}</h2>
              <p>{e.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Our_Club;
