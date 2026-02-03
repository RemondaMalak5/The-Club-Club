
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { board_member } from './../../axiosConfig/APIs/Board_member/Board_member';
import { mainUrl } from './../../axiosConfig/Instance';
import DOMPurify from "dompurify";
import i18next from "i18next";
import Error_Template from "../../../../../components/Shared_Componant/Error_Template";

const Boardmember = () => {
    const { t } = useTranslation();
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const board_member_api = async () => {
        const params = {
            lang: i18next.language,
            branch: "نادي النادي - 6 اكتوبر"
        }
        try {
            const response = await board_member(params);
            console.log("params", params)
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
        board_member_api();
    }, [i18next.language])



    return (
        <section className="board_member"      >
            <h2 className="px-28 py-5 text-4xl "> {t("Board_Members")}</h2>
            <hr className="w-[80%] mx-28"></hr>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-40 mb-24">
                {
                    data ? <>
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center relative overflow-hidden "
                            >
                                <img src={`${mainUrl}${item.photo}`} className="h-[90%]" />
                                <div className="info_member text-center p-2">
                                    <h1 className="text-lg ">{item.name}</h1>
                                    <h6 className="text-xs">{item.title}</h6>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: DOMPurify.sanitize(item.description)
                                        }} />
                                </div>
                            </div>
                        ))}


                    </> :
                        <div>
                            <Error_Template />
                        </div>
                }

            </div>
        </section>
    );
};

export default Boardmember;
