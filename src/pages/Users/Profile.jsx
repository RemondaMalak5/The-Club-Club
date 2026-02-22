import React from 'react'
import { FaArrowTrendUp, FaCalendar, FaStar } from 'react-icons/fa6'
import { IoTimeOutline } from "react-icons/io5";
import Info_Ecard from './Info_Ecard';
import assets from '../../assets/assets';


const Profile = () => {
    const arr_rate = [
        { star: <FaStar /> },
        { star: <FaStar /> },
        { star: <FaStar /> },
        { star: <FaStar /> },
        { star: <FaStar /> },
    ]

    const arr_schedule = [
        { day: 'Monday', time: '08:00 AM - 10:00 PM' },
        { day: 'Tuesday', time: '08:00 AM - 10:00 PM' },
        { day: 'Wednesday', time: '08:00 AM - 10:00 PM' },

    ]
    return (
        <div className='flex flex-wrap w-full px-20'> 
        <div className='w-1/3 flex flex-col gap-5 '>  
         <div className='w-full rounded-2xl border-4 border-[#005F5A]  '>
                <div className='bg-gradient-to-b from-[#009689] to-[#00786F] rounded-t-xl '>
                    <div className='flex justify-center py-3'>
                        {arr_rate.map((e, index) => (
                            <div key={index} className='text-[#FDC700] text-2xl px-1 '>
                                {e.star}
                            </div>
                        ))}
                    </div>
                    <div className='flex px-2 justify-center py-3'>
                        <div className='rounded-2xl py-1 px-3  bg-white text-[#00786F]'>
                            2025-2026
                        </div>
                        <h2 className='text-white text-center text-2xl font-bold px-5'> Member</h2>
                        <div className='rounded-2xl py-1 px-3  bg-white text-[#00786F]'>
                            OC-123456                </div>
                    </div>


                </div>
                <div className='px-5 py-3 flex flex-col justify-center items-center gap-2 '>
                    <img src={assets.doc} className='rounded-full w-40 h-40 border-4 border-[#00786F]' />
                    <h1 className='text-2xl font-semibold'>Remonda Malak</h1>
                    <p className='border border-[#21857C] bg-[#F0FDFA] px-2 rounded-lg'>Active Member </p>
                    <img src={assets.barcode} className='w-52' />
                    <div className='flex flex-wrap px-5 justify-center'>
                        <img src={assets.sport_ecard} className='w-20 mx-2 border-2 border-[#035657] p-3 rounded-full' />
                        <img src={assets.sport_ecard} className='w-20  border-2 border-[#035657] p-3 rounded-full' />
                        <img src={assets.sport_ecard} className='w-20 mx-2 border-2 border-[#035657] p-3 rounded-full' />
                        <img src={assets.sport_ecard} className='w-20 mx-2 border-2 border-[#035657] p-3 rounded-full' />
                        <img src={assets.sport_ecard} className='w-20 mx-2 border-2 border-[#035657] p-3 rounded-full' />

                    </div>
                    <div className='flex flex-col gap-3 '>
                        {arr_schedule.map((e, index) => (
                            <div className='border-2 border-[#21857C] rounded-md  flex justify-between  gap-3 p-2 w-full ' key={index}>
                                <span className=' text-[#21857C] border-2 border-[#21857C] px-3 py-3 rounded-md text-2xl'> <FaCalendar /> </span>
                                <p className='font-semibold text-sm  py-3 '>{e.day}</p>
                                <div className='flex justify-end bg-[#21857C] text-white rounded-md  px-1 '>
                                    <span className='py-4 text-lg  '> <IoTimeOutline /> </span>
                                    <p className='font-semibold   px-1 py-3  '>  {e.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>

            <div className='w-full rounded-2xl border-4 border-[#005F5A] p-5'>
                  <p className='flex flex-wrap gap-3 font-semibold text-lg'> <span className='py-1 text-[#21857C] '> <FaArrowTrendUp/> </span> Quick Status </p> 
                   
            </div>
        </div>
           






             <Info_Ecard/>
            
        </div>
    )
}

export default Profile

