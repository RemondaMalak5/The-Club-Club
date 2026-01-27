import i18next from "i18next";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Title_1 from "../../../../../components/Shared_Componant/Title_1";
import { our_club } from "../../axiosConfig/APIs/ourClub/Our_club";
import { mainUrl } from "../../axiosConfig/Instance";

const Video_home = () => {
  const { t } = useTranslation();
  const [data, setData] = useState(null);

  const ourClub_api = async () => {
    const params = {
      lang: i18next.language,
      branch: "نادي النادي - 6 اكتوبر",
    };

    try {
      const response = await our_club(params);
      setData(response?.message?.[0] );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    ourClub_api();
  }, [i18next.language]);

  return (
    <div
      className="video flex flex-col items-center justify-center gap-6 py-6"
      dir={i18next.language === "ar" ? "rtl" : "ltr"}
    >
      <Title_1 title={"  Take a Glimpse Inside The Club!"}/>
            <p className='text-gray-600 text-center text-2xl'>Get a quick look at our world-class facilities and sports community.</p>
      {data?.video ? (
        <video
          src={`${mainUrl}${data.video}`}
          controls
          autoPlay
          muted
          loop
          className="w-[60%] rounded-2xl shadow-lg h-96 my-5 border-2 border-[#21857C]"
        />
      ) : (
        <p className="text-gray-500">{t("loading_video")}</p>
      )}
    </div>
  );
};

export default Video_home;
