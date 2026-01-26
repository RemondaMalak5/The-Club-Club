
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
// import { offers_content } from '../../axiosConfig/APIs/offers/offers_content';
import { useTranslation } from "react-i18next";
import DOMPurify from "dompurify";
// import { mainUrl } from './../../axiosConfig/Instance';
import i18next from 'i18next';
import { HiMiniCalendarDateRange } from 'react-icons/hi2';
import Pagination from '../../../../../components/Shared_Componant/Pagination';
import Error_Template from '../../../../../components/Shared_Componant/Error_Template';
import Btn_1 from '../../../../../components/Shared_Componant/Btn_1';

const LoyaltyContent = () => {

  const { t } = useTranslation();

  // const [data, setData] = useState(null);
  // const [error, seterror] = useState(false);
  // const offers_content_Api = async () => {
  //   const params = {
  //     "lang": i18next.language,
  //     "branch": "نادي النادي - 6 اكتوبر"
  //   }
  //   try {
  //     const response = await offers_content(params);
  //     console.log("response : ", response)
  //     setData(response.message);
  //   } catch (error) {
  //     console.log("error : ", error)
  //     seterror(true);
  //   }
  // }

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const cleanDescription = DOMPurify.sanitize(data?.[0]?.small_description ? data?.[0]?.small_description : data?.[0]?.small_description_ar, {
    ALLOWED_ATTR: [], // Remove all attributes like class, style, etc.
  });

  // const currentItems = arr.slice(indexOfFirstItem, indexOfLastItem);

  // useEffect(() => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  //   offers_content_Api();
  // }, [i18next.language])

  return (
    <section>
      <div className='w-full md:px-28 p-10' >
        <h2 className='text-3xl mb-5 text-[#014e52]'>{t("Title")} </h2>

        {/* <div className='flex flex-wrap'>
          {data ? <>
            {data?.map((e, index) => (
              <Link to={`/News/${e.news_id}`} className="xl:w-1/3 w-full px-2 py-2" key={index}>
                <div className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden " key={index}>
                  <div className={`absolute  ${i18next.language === "en" ? " rounded-br-xl" : " rounded-bl-xl"
                    } bg-yellow-300 text-sm font-bold text-black px-3 py-1 z-10`}>
                    <p>{e.discount_value + ` % ${t("discount")}`}</p>
                  </div>
                  <img
                    src={`${mainUrl}${e.image}`}
                    alt="صورة"
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-3">

                    <h5 className="text-lg font-bold mb-2 text-black">{e.title} </h5>
                    <div dangerouslySetInnerHTML={{ __html: e.small_description }} className=" line-clamp-1" />
                    <div className="flex justify-between text-[#21857C] text-lg ">
                      <p className='flex items-center '> <span className="p-1"><HiMiniCalendarDateRange /></span> {e.date}</p>
                      <Btn_1  title={t("Read_more")} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </> :
            <div className='h-[60vh]'>
              <Error_Template/>
            </div>
          }
        </div> */}
        <Pagination
          array_items={data}
          itemsPerPage={itemsPerPage}
          indexOfFirstItem={indexOfFirstItem}
          indexOfLastItem={indexOfLastItem}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  )
}

export default LoyaltyContent;


