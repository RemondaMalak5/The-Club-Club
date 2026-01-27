import React from 'react'
import i18next from 'i18next';
import { HiMiniArrowTrendingUp } from 'react-icons/hi2';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import assets from '../../../../../assets/assets';
import Title_1 from '../../../../../components/Shared_Componant/Title_1';

const  Services_home = () => {
    const [t] = useTranslation();
    const navigate = useNavigate();
    const arr = [
        { image: assets.services_1, title: "Yoga & Wellness", description: "Mindful yoga sessions and wellness programs for body and mind balance." },
        { image: assets.services_2, title: "Swimming Classes", description: "Learn to swim or improve your technique with our expert swimming instructors." },
        { image: assets.services_3, title: "Personal Training", description: "One-on-one coaching tailored to your fitness goals with certified trainers." },
    ]
    return (
        <div className='bg-[#E9F0F0] px-10 py-10'>
            <Title_1 title={"Our Services"} />
            <p className='text-gray-600 text-center text-2xl'>Discover our comprehensive range of sports and fitness services designed to help you excel.</p>
            <div className='flex flex-wrap py-5 w-full ' onClick={()=>navigate("/services_details")}>
                {arr.map((e, index) => (
                    <div className="xl:w-1/3 md:w-1/2 w-full px-2" key={index}>
                        <div className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden " key={index}>
                            <img
                                src={e.image}
                                alt="صورة"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <h5 className="text-lg font-semibold mb-2 text-gray-800">{e.title} </h5>
                                <p className="text-gray-600 mb-4">
                                    {e.description}                            </p>
                                <button className="px-4 py-2  text-[#21857C] rounded-2xl border border-[#21857C] w-full hover:bg-[#21857C] hover:text-white transition-all duration-300">
                                    learn more
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center pt-3">
                <button onClick={()=>navigate("/services")}
                 className=" px-5 py-1 text-lg flex  text-[#21857C] hover:bg-[#21857C] hover:text-white rounded-lg border-2 border-[#21857C]" > {t("see_more")}
                    {i18next.language !== "ar" ? (
                        <HiMiniArrowTrendingUp className="m-1" />
                    ) : (
                        <HiMiniArrowTrendingUp className="m-1" />
                    )}
                </button>
               
            </div>
        </div>
    )
}

export default Services_home
