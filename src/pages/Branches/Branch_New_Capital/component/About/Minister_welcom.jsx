import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { mainUrl } from "./../../axiosConfig/Instance";
import DOMPurify from "dompurify";
import { minister_welcome_content } from "../../axiosConfig/APIs/Minister/minister_welcome_content";
import i18next from "i18next";
import assets from "../../../../../assets/assets";

const Minister_welcom = () => {
  const {  t } = useTranslation();
  const [data, setData] = useState([]);

  const cleanDescription = DOMPurify.sanitize(data?.[0]?.description, {
    ALLOWED_ATTR: [],
  });

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    minister_content_Api();
  }, [i18next.language]);

  const minister_content_Api = async () => {
    const params = {
      lang: i18next.language,
      branch: "نادي النادي - 6 اكتوبر",
    };
    try {
      const response = await minister_welcome_content(params);
      console.log("response : ", response);
      setData(response.message);
    } catch (error) {
      console.log("error : ", error);
    }
  };

  return (
    <section>
      <div className="StrategicPlans flex justify-around items-end  ">
        <h2>{t("Minister welcom")}</h2>

        <div className="icon_StrategicPlans ">
          <img src={assets.terms_card} />
        </div> 
      </div>

      <div className="m-20">
        {data?.map((item, index) => (
          <div key={index}>
            <img src={`${mainUrl}${item.photo}`} className="w-60 h-60" />
            <h2 className="text-2xl font-extrabold">{item.title}</h2>
                <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(item.description)
                }} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Minister_welcom;
