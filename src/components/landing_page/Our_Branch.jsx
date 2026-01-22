import React from 'react'
import assets from '../../assets/assets'
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import Title_2 from '../Shared_Componant/Title_2';
import Title_3 from '../Shared_Componant/Title_3';
import Btn_Card from '../Shared_Componant/Btn_Card';
import { useNavigate } from 'react-router-dom';

const Our_Branch = () => {
   const navigate = useNavigate();
    
    const arr = [
        {
            image: assets.branch_6_october, title: "6th of October, Juhayna Square", time: "Open from 8 Am to 12 Am", description: "The Club's main branch is Located at 6 October City near Juhayna Square, in the Dahshur link between Juhayna Square and Al-Wahat Road, on 20 Feddan.",
            url: "6-october"
        },
        { image: assets.branch_el3asma, title: "Ankara st., Sheraton El Matar", time: "Open from 8 Am to 12 Am", description: "The Club's main branch is Located at 6 October City near Juhayna Square, in the Dahshur link between Juhayna Square and Al-Wahat Road, on 20 Feddan." ,
            url: "Sheraton"
        },
        { image: assets.branch_sheraton, title: "New Administrative Capital, R7", time: "Open from 8 Am to 12 Am", description: "The Club's main branch is Located at 6 October City near Juhayna Square, in the Dahshur link between Juhayna Square and Al-Wahat Road, on 20 Feddan.",
            url: "Capital"
         },

    ]
    return (
        <div>
            <Title_2 title={"Our Three Branches"} />
            <Title_3 title={"Choose the branch closest to you and enjoy a unique sports experience"} />

            <div className='flex flex-wrap justify-center'>
                <div className='flex flex-wrap py-5 w-[75%]  '>
                    {arr.map((e, index) => (
                        <div className="xl:w-1/3 md:w-1/2 w-full px-2 " key={index}>
                            <div className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden " key={index}>
                                <img
                                    src={e.image}
                                    alt="branch image"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="py-3 px-5">
                                    <h5 className="text-[16px] font-semibold mb-2 text-black flex gap-2 py-1">
                                        <span className='text-[#21857C] text-[22px] font-extrabold '> <MdOutlineLocationOn /> </span>
                                        {e.title} </h5>
                                    <p className='bg-[#E9F0F0] text-[#00786F] flex gap-1 rounded-2xl px-2 text-[14px] py-1 w-fit my-3 '>
                                        <span className='text-[#21857C] text-[18px] font-bold ' > <IoMdTime /></span>
                                        {e.time}
                                    </p>
                                    <p className="text-gray-600 mb-4">
                                        {e.description}                            </p>
                                    <Btn_Card
                                        title={"Visit Branch Website"}
                                        onClick={() => navigate(`/branches/${e.url}`)}
                                    />  
                                    </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>

        </div>
    )
}

export default Our_Branch
