import React from 'react'
import { IoMdCloseCircleOutline } from 'react-icons/io'

const Close_Form = ({setIsOpen}) => {
    return (
        <div className='flex justify-end text-3xl text-[#035557] cursor-pointer'
            onClick={() => { setIsOpen(false) }}
        >
            <IoMdCloseCircleOutline />
        </div>
    )
}

export default Close_Form