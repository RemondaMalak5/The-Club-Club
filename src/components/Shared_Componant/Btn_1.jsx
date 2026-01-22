import i18next from 'i18next'
import React from 'react'
import { GoArrowUpLeft, GoArrowUpRight } from 'react-icons/go'

const Btn_1 = ({title}) => {
    return (
        <div>
            <button className="px-5 py-2 my-3  text-white rounded-2xl border hover:bg-gray-100 hover:text-[#21857C] bg-[#21857C] w-fit flex gap-2">
                <span>{title}</span>
                {i18next.language !== "ar" ? (<GoArrowUpRight className="mt-1" />) : (
                    <GoArrowUpLeft className="mt-1" />
                )}
            </button>
        </div>
    )
}

export default Btn_1
