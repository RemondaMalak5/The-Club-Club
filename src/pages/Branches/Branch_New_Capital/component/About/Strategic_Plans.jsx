import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";
import  DOMPurify  from 'dompurify';
import { strategic_plans_content } from '../../axiosConfig/APIs/strategy_plan/strategic_plans_content';
import i18next from 'i18next';
import assets from '../../../../../assets/assets';
import Error_Template from '../../../../../components/Shared_Componant/Error_Template';

const Strategic_Plans = () => {
  const { t} = useTranslation();
  const [data, setData] = useState(null);
  const [error , setError]=useState(false);

 const cleanDescription = DOMPurify.sanitize(data?.[0]?.description, {
    ALLOWED_ATTR: [], 
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
    strategic_plans_content_api();
  }, [i18next.language])



   const strategic_plans_content_api = async () => {
        const params = {
          "lang": i18next.language,
          "branch": "نادي النادي - 6 اكتوبر"
        }
        try {
          const response = await strategic_plans_content(params);
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
        <h2>{t("Strategic_Plans")}</h2>

        <div className="icon_StrategicPlans ">
          <img src={assets.terms_card} />
        </div> 
      </div>

    <div className='m-24'>
      {data?<>
          {data?.map((item, index) => (
                <div  key={index}>
                    <div>
                      
                       <div dangerouslySetInnerHTML={{ __html: cleanDescription }} /> 
                    </div>
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

export default Strategic_Plans