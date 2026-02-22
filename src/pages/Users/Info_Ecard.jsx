import React from 'react'
import { IoMdPeople } from "react-icons/io";


const Info_Ecard = () => {
    return (
        <div className='w-2/3 px-9 '>
            <div className='border  border-[#005F5A] rounded-lg p-5'> 
                <div className='flex flex-wrap gap-2 items-center py-5'>
                    <p className='border border-[#21857C] text-5xl  rounded-lg bg-[#EEFFFF] text-[#21857C]'> <IoMdPeople /> </p>
                    <div className='flex flex-col  '>
                        <h1 className='font-semibold  text-lg'>Membership Information</h1>
                        <p className='text-sm'>Official membership details and documentation</p>
                    </div>
                </div>
                <hr className='text-[#21857C] '/>
                <div className='flex flex-wrap w-full'>
                    <div className='w-1/4 px-5 py-3  border-2 border-[#005F5A] rounded-lg m-2 '>
                        <p className='font-semibold text-[#21857C] py-3'>Membership Type</p>    
                        <h2 className='font-bold text-lg'> Premium Member</h2>
                    </div>
                    <div className='w-1/4   px-5 py-3  border-2 border-[#005F5A] rounded-lg m-2 '>
                        <p className='font-semibold text-[#21857C] py-3'>Membership Type</p>    
                        <h2 className='font-bold text-lg'> Premium Member</h2>
                    </div>
                    <div className='w-1/4 px-5 py-3  border-2 border-[#005F5A] rounded-lg m-2 '>
                        <p className='font-semibold text-[#21857C] py-3'>Membership Type</p>    
                        <h2 className='font-bold text-lg'> Premium Member</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info_Ecard
