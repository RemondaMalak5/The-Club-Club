import React, { useEffect, useState } from 'react'
import assets from './../../assets/assets';
import { useTranslation } from "react-i18next";
// import { mainUrl } from './../../axiosConfig/Instance';
import DOMPurify from "dompurify";

import { board_chairman } from './../../axiosConfig/APIs/Board_ Chairman/Board_ Chairman';
import i18next from 'i18next';

const Board = () => {

   const { t} = useTranslation();
      const [data, setData] = useState([]);
      const [error , setError]=useState(false)
      useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
        board_chairman_api();
      }, [i18next.language])

      
     const board_chairman_api = async () => {
              const params = {
                   "lang": i18next.language,
                   "branch": "نادي النادي - 6 اكتوبر"
                 }
                 try {
                   const response = await board_chairman(params);
                   console.log("response : ", response)
                   setData(response.message);
                 } catch (error) {
                   console.log("error : ", error)
                   setError(true)
                 }
               }
      

  return (
    <section >
         <div className="StrategicPlans flex justify-around items-end ">
        <h2>{t("Board_Chairman_Word")}</h2>

        <div className="icon_StrategicPlans ">
          <img src={assets.terms_card} />
        </div> 
      </div>
   
  
      <div className="m-10">
        {
          data?<>   
               {data.map((item, index) => (
          <div
            key={index} >
            
           <h6 className="text-lg font-extrabold">{item.title}</h6>
               <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(item.description)
                }} />
           
          </div>
        ))}
          </>:
          <div>
            <Error_Template/>
          </div>
        }
      
      </div>


</section>
  )
}

export default Board