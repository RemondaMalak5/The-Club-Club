
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from 'react-router-dom';
import { News_content } from "../../axiosConfig/APIs/News/News_content";
import i18next from "i18next";
import { HiMiniArrowTrendingUp, HiMiniCalendarDateRange } from "react-icons/hi2";
import Btn_1 from "../../../../../components/Shared_Componant/Btn_1";
import Title_1 from "../../../../../components/Shared_Componant/Title_1";
import { mainUrl } from "../../axiosConfig/Instance";


const News_Home = () => {
  const {  t } = useTranslation();
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const navigate = useNavigate();

   const fetchData = async () => {
      const params = {
        lang: i18next.language,
        branch: "نادي النادي - 6 اكتوبر",
        limit: 3 
      };
      try {
        const response = await News_content(params);
        setData(response.message || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    useEffect(() => {
   
    fetchData();
  }, [i18next.language]);
  return (
  <section className=" bg-[#E9F0F0] py-6 ">
              <Title_1 title={t("New")}/>
        <p className=" text-gray-600 text-center text-2xl">Stay informed with the latest news, achievements, and announcements from our club</p>
         <div className='flex flex-wrap py-5 w-full px-9'>
                {data?.map((e, index) => (
                    <Link to={`/branches/6-october/News/${e.news_id}`} className="xl:w-1/3 md:w-1/2 w-full px-2 " key={index}>
                        <div className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden " key={index}>
                            <img
                                src={`${mainUrl}${e.image}`}
                                alt="صورة"
                                className="w-full h-60 object-cover"
                            />
                            <div className="p-3">
                              <div className="flex text-[#21857C] text-lg ">
                                <span className="p-1"><HiMiniCalendarDateRange /></span> 
                              <p >{e.date}</p>
                              </div>
                                 <h5 className="text-lg font-bold mb-2 text-black">{e.title} </h5>
                                 <div dangerouslySetInnerHTML={{ __html: e.small_description }}  className=" line-clamp-1"/>
                                <Btn_1 title={t("Read_more")}/>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
               <div className="flex justify-center items-center py-3">
   <button onClick={()=>navigate("/Newssection")}
                 className=" px-5 py-1 text-lg flex  text-[#21857C] hover:bg-[#21857C] hover:text-white rounded-lg border-2 border-[#21857C]" > {t("see_more")}
                    {i18next.language !== "ar" ? (

                        <HiMiniArrowTrendingUp className="m-1" />
                    ) : (
                        <HiMiniArrowTrendingUp className="m-1" />
                    )}
                </button>
               </div>
           
    </section>
  );
};

export default News_Home;

// const LastNews = () => {
 


  
//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       if (width >= 1024) setItemsPerPage(3);
//       else if (width >= 768) setItemsPerPage(2);
//       else setItemsPerPage(1);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

 
//   const totalCards = data.length;

//   const prevSlide = () => {
//     setActiveIndex((prev) => Math.max(prev - 1, 0));
//   };

//   const nextSlide = () => {
//     setActiveIndex((prev) =>
//       Math.min(prev + 1, totalCards - itemsPerPage)
//     );
//   };

//   const handleClick = () => {
//     navigate('/Loyalty');
//   };

//   if (data.length === 0) {
//     return (
//       <div className="text-center text-gray-500 py-10">
//         {t("no_news_found") || "No news available"}
//       </div>
//     );
//   }

//   return (
//     <div className="w-full">
//       <div className="flex justify-end py-6 pe-3">
//         <div
//           onClick={handleClick}
//           className="border-b pb-2 border-b-[#014E52] text-[#014e52] font-semibold text-[18px] flex items-center gap-2 cursor-pointer"
//         >
//           <span>{t("view_more")}</span>
//           {i18next.language !== "ar" ? (

//             <FaArrowRight className="mt-1" />
//           ) : (
//             <FaArrowLeft className="mt-1" />
//           )}
//         </div>
//       </div>

//       <div className="overflow-hidden relative">
//         <ul
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{
//             width: `${(100 / itemsPerPage) * data.length}%`,
//             transform: `translateX(-${(100 / data.length) * activeIndex}%)`,
//           }}
//         >
//           {data.map((item, index) => (
//             <li
//               key={index}
//               className="md:w-1/3 w-full overflow-hidden m-2 bg-[#d9d9d9] rounded-3xl"
//               style={{ flex: `0 0 ${100 / data.length}%` }}
//             >
//               <div className="h-full flex flex-col p-4 w-full rounded-[12px]">
//                 <div className="flex">
//                   <img
//                     className="h-[250px] w-full object-cover border rounded-[12px] hover:scale-105 duration-300"
//                     src={`${mainUrl}${item.image}`}
//                     alt={item.title}
//                   />
//                 </div>
//                 <div className="h-full flex flex-col py-1">
//                   <div className="font-semibold my-1">
//                     <h2 className="text-lg font-bold text-[#035557]">{item.title}</h2>
//                      <div className='line-clamp-2'
//                 dangerouslySetInnerHTML={{
//                   __html: DOMPurify.sanitize(item.small_description)
//                 }}
//               />
//                     </div>
//                   <div className="flex justify-between font-bold h-full items-end">
//                     <p className="font-bold">{item.date}</p>
//                     <Link
//                       className="flex items-center gap-1 cursor-pointer"
//                       to={`/News/${item.news_id}`}
//                     >
//                       {t("view_more")}
//                       {i18next.language !== "ar"  ? (
//                         <IoIosArrowForward className="mt-1" />
//                       ) : (
//                         <MdKeyboardArrowLeft className="mt-1" />
//                       )}
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </ul>

//         {data.length > itemsPerPage && (
//           <div className="w-full flex justify-between mt-4 px-8 absolute top-[40%]">
//             <button
//               onClick={prevSlide}
//               disabled={activeIndex === 0}
//               className="w-12 h-12 text-[20px]
//               disabled:opacity-0
//               bg-opacity-50 rounded-full bg-[#1b1b1b] flex items-center justify-center hover:bg-opacity-75"
//             >
//               <IoIosArrowBack className="text-white text-3xl"/>
//             </button>
//             <button
//               onClick={nextSlide}
//               disabled={activeIndex >= data.length - itemsPerPage}
//               className="w-12 h-12 text-[20px]
//               disabled:opacity-0
//               bg-opacity-50 rounded-full bg-[#1b1b1b] flex items-center justify-center hover:bg-opacity-75"
//             >
//               <IoIosArrowForward  className="text-white  text-3xl  " />
 
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

