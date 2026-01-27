import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { gallary } from "../../axiosConfig/APIs/Gallary/gallary";
import i18next from "i18next";
import { GoArrowUpLeft, GoArrowUpRight } from "react-icons/go";
import Title_1 from "../../../../../components/Shared_Componant/Title_1";
import { mainUrl } from "../../axiosConfig/Instance";

const Gallary_Home = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  // const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetch = async () => {
      const params = { lang: i18next.language, branch: "نادي النادي - 6 اكتوبر" };
      try {
        const res = await gallary(params);
        setData(res.message[0]);
      } catch (e) {
        setError(true);
      }
    };
    fetch();
  }, [i18next.language]);

  const arr = [
    { image: `${mainUrl}${data?.gallery}`, title: "event", description: "hello" },
    { image: `${mainUrl}${data?.gallery}`, title: "event", description: "hello" },
    { image: `${mainUrl}${data?.gallery}`, title: "event", description: "hello" },
    { image: `${mainUrl}${data?.gallery}`, title: "event", description: "hello" },
  ]

  return (
    <div className="bg-[#E9F0F0] px-10 py-12" >
      <Title_1 title={"our gallary"}/>
      <p className='text-gray-600 text-center text-2xl'>Discover our comprehensive range of sports and fitness services designed to help you excel.</p>
      <div className='flex flex-wrap py-5 w-full '>
        {arr.map((e, index) => (
          <div className="xl:w-1/4 w-full px-2" key={index}>
            <div className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden relative" >
              <img
                src={e.image}
                alt="صورة"
                className="w-full h-48 object-cover"
              />
              <div className={`absolute ${i18next.language !== "ar" ? "top-[5%] right-3" : "top-[5%] left-3"} text-[#035657] bg-white  w-[30px] h-[30px] rounded-full px-1 py-2`}>
                {i18next.language !== "ar" ? (  <GoArrowUpRight   />) : (
                                 <GoArrowUpLeft  />
                                       )}
              </div>
              <div className="py-2 bg-[#035657]/70 text-white text-center">
                <h5 className="text-[16px] font-semibold ">{e.title} </h5>
                <p className="text-[14px]">
                  {e.description}                 
                             </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallary_Home;
