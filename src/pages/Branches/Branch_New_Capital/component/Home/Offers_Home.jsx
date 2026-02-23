import React, { useEffect, useState } from "react";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
  FaLongArrowAltLeft,
  FaArrowLeft,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from 'react-router-dom';
// import Details from "../../Pages/Details/Details";
import { offers_content } from "../../axiosConfig/APIs/offers/offers_content";
import DOMPurify from "dompurify";
import { mainUrl } from "../../axiosConfig/Instance";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import i18next from "i18next";

const Offers_Home = () => {
  const { t } = useTranslation();

  return (

    <section>
      <div className="w-full px-24 py-5 news">
        <h2 className="text-2xl">{t("offers")}</h2>
      </div>
      <div className="frame flex sm:mx-24 mx-4 p-6">
        <LastOffers />
      </div>
    </section>
  );
};

export default Offers_Home;

const LastOffers = () => {
  const { t } = useTranslation();


  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const offers_content_Api = async () => {
    const params = {
      "lang": i18next.language,
      "branch": "نادي النادي - 6 اكتوبر"

    }
    try {
      const response = await offers_content(params);
      console.log("response : ", response)
      setData(response.message);
    } catch (error) {
      console.log("error : ", error)
    }
  }
  useEffect(() => {
    offers_content_Api();
  }, [i18next.language]);


  const [activeIndex, setActiveIndex] = useState(0);
  const [trsnsfromNum, setTrsnsfromNum] = useState(33);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);
  const totalPages = Math.ceil(data?.length / itemsPerPage);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? totalPages - 3 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === totalPages + 3 ? totalPages + 3 : prev + 1
    );
  };
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      if (width >= 1024) {
        setItemsPerPage(3); // lg
        setTrsnsfromNum(33)
      } else if (width >= 768) {
        setItemsPerPage(2); // md
        setTrsnsfromNum(50)
      } else {
        setItemsPerPage(1); // sm
        setTrsnsfromNum(100)
      }
    };

    handleResize(); // set on mount
    window.addEventListener("resize", handleResize); // update on resize

    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Loyalty');
  };
  const cleanDescription = DOMPurify.sanitize(data?.[0]?.small_description, {
    ALLOWED_ATTR: [],
  });
  return (
    <div className="w-full ">


      <div className="flex justify-end py-6 pe-3">
        <div onClick={handleClick}
          className="border-b pb-2 border-b-[#014E52] text-[#014e52] font-semibold
            text-[18px] flex items-center gap-2 cursor-pointer"
        >
          <span>{t("view_more")}</span>
          {i18next.language !== "ar" ? (
            <FaArrowRight className="mt-1" />
          ) : (
            <FaArrowLeft className="mt-1" />
          )}

        </div>
      </div>
      <div className="overflow-hidden relative ">
        <ul
          className="flex transition-transform duration-500 ease-in-out "
          style={{
            width: `${100 * totalPages}%`,
            transform: `translateX(-${activeIndex * (trsnsfromNum / totalPages)}%)`, //100 , 50, 33
          }}
        >
          {data?.map((item, index) => (
            <li key={index} className="md:w-1/3 w-full overflow-hidden  m-2 px-1 bg-[#d9d9d9] rounded-3xl ">
              <div

                className="  h-full flex flex-col p-4 w-full rounded-[12px]"
              >
                <div className="flex ">
                  <img
                    className="h-[250px] w-full object-cover border rounded-[12px] hover:scale-105 duration-300 relative "
                    src={`${mainUrl}${item.image}`}
                    alt={item.title}
                  />
                  <div className={`absolute  ${i18next.language === "en" ? " rounded-br-xl" : " rounded-bl-xl"
                    } bg-yellow-300 text-sm font-bold text-black px-3 py-1 z-10`}>
                    <p>{item.discount_value + ` % ${t("discount")}`}</p>


                  </div>
                </div>
                <div className="h-full flex flex-col py-1">
                  <div className=" my-1">
                    <h2 className="text-lg font-bold text-[#035557] truncate w-72">{item.title}</h2>
                    <p>{item.brief}</p>


                  </div>

                  <div
                    dangerouslySetInnerHTML={{ __html: cleanDescription }}
                  />
                  <div className="flex justify-between font-bold h-full items-end">
                    <span>{item.date}</span>


                    <Link className='flex items-center gap-1 cursor-pointer' to={`/offers/${item.offers_id}`} >
                      {t("view_more")}
                      {i18next.language !== "ar" ? (
                        <IoIosArrowForward className="mt-1" />
                      ) : (
                        <MdKeyboardArrowLeft className="mt-1" />
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        {((windowWidth >= 768 && data?.length > 3) || (windowWidth < 768 && data?.length > 1)) && (
          <div className="w-full flex justify-between mt-4 px-8 absolute top-[40%]">
            <button
              onClick={prevSlide}
              className="w-8 h-8 text-[20px] bg-opacity-50 rounded-full bg-[#EEE] flex items-center justify-center hover:bg-opacity-75"
            >
              <FaRegArrowAltCircleLeft />
            </button>
            <button
              onClick={nextSlide}
              className="w-8 h-8 text-[20px] bg-opacity-50 rounded-full bg-[#EEE] flex items-center justify-center hover:bg-opacity-75"
            >
              <FaRegArrowAltCircleRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
