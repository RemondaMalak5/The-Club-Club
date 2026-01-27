// NewsContant.jsx
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { News_content } from '../../axiosConfig/APIs/News/News_content';
import { useTranslation } from "react-i18next";
import DOMPurify from 'dompurify';
import { mainUrl } from './../../axiosConfig/Instance';
import i18next from 'i18next';
import { HiMiniCalendarDateRange } from 'react-icons/hi2';
import PaginationComponent from '../../../../../components/Shared_Componant/PaginationComponent';
import Error_Template from '../../../../../components/Shared_Componant/Error_Template';
import Btn_1 from '../../../../../components/Shared_Componant/Btn_1';

const NewsContant = () => {
  const { t } = useTranslation();

  const [data, setData] = useState(null);
  const [error, setError] = useState(false)
  const news_content_Api = async () => {
    const params = {
      "lang": i18next.language,
      "branch": "نادي النادي - 6 اكتوبر"
    }
    try {
      const response = await News_content(params);
      console.log("response : ", response)
      setData(response.message);
    } catch (error) {
      console.log("error : ", error)
      setError(true)
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    news_content_Api();

  }, [i18next.language])
  const cleanDescription = DOMPurify.sanitize(data?.[0]?.small_description, {
    ALLOWED_ATTR: [],
  });

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;


  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section dir={i18next.language === "ar" ? "rtl" : "ltr"}>
      <div className='w-full md:px-28 p-10'>
        <h2 className='text-3xl my-3 text-center font-semibold'> {t("last_News")} </h2>

        <div className='flex flex-wrap w-full'>
          {data ? <>
             {data?.map((e, index) => (
                                <Link to={`/News/${e.news_id}`} className="xl:w-1/3 w-full px-2 py-2" key={index}>
                                    <div className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden " key={index}>
                                        <img
                                            src={`${mainUrl}${e.image}`}
                                            alt="صورة"
                                            className="w-full h-60 object-cover"
                                        />
                                        <div className="p-3">
                                          <div className="flex text-[#21857C] text-lg ">
                                            <span className="p-1"><HiMiniCalendarDateRange /></span> 
                                          <p className="">{e.date}</p>
                                          </div>
                                             <h5 className="text-lg font-bold mb-2 text-black">{e.title} </h5>
                                             <div dangerouslySetInnerHTML={{ __html: e.small_description }}  className=" line-clamp-1"/>
                                            <Btn_1 title={t("Read_more")}/>
                                        </div>
                                    </div>
                                </Link>
                            ))}
          </> :
            <div>
              <Error_Template />
            </div>

          }

        </div>

        {/* ✨ مكون الـ pagination */}
        {/* <Pagination
          array_items={data}
          itemsPerPage={itemsPerPage}
          indexOfFirstItem={indexOfFirstItem}
          indexOfLastItem={indexOfLastItem}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        /> */}
        <PaginationComponent
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={Math.ceil((data?.length || 0) / itemsPerPage)}
         paginationRef={null}  
        />
      </div>
    </section>
  )
}

export default NewsContant;
