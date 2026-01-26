// import React from 'react'
// import { RiCoinsLine } from "react-icons/ri";
// import { IoInformationCircleOutline } from "react-icons/io5";
// import { MdOutlineDateRange } from "react-icons/md";
// import assets from '../../assets/assets';

// const Services_detail_contant = () => {

//   const arr = [
//     { icon: <RiCoinsLine />, title: 'swimming', desc: "500 Egp" },
//     { icon: <RiCoinsLine />, title: 'swimming', desc: "500 Egp" },
//     { icon: <RiCoinsLine />, title: 'swimming', desc: "500 Egp" },
//     { icon: <RiCoinsLine />, title: 'swimming', desc: "500 Egp" },
//     { icon: <RiCoinsLine />, title: 'swimming', desc: "500 Egp" },

//   ]
//   const arr_1 = [
//     { icon: <IoInformationCircleOutline />, title: 'About This Services', desc: "Our Swimming Academy offers professional training programs for all skill levels, from beginners to competitive swimmers. Our experienced coaches use proven techniques to help you improve your swimming skills, build endurance, and develop proper form. Whether you're looking to learn the basics, improve your technique, or train for competitions, our academy provides a supportive and professional environment." },
//   ]
//   const arr_2 = [
//    { day:"Sunday"},
//       { day:"Sunday"},
//    { day:"Sunday"},
//    { day:"Sunday"},

//   ];

//   const arr_3 = [
//     { title: "Morning Session", time: "9:00 AM" },
//     { title: "Evening Session", time: "9:00 AM" }

//   ]
//   const arr_4 = [
//     { img: assets.cotch_1, desc: "Coach Ahmed Hassan - Olympic Trainer" },
//     { img: assets.cotach_2, desc: "Coach Ahmed Hassan - Olympic Trainer" },
//     { img: assets.coatch_3, desc: "Coach Ahmed Hassan - Olympic Trainer" }

//   ]
//   const arr_5 = [
//     { img: assets.services_2 },
//     { img: assets.services_2 },
//     { img: assets.services_2 },
//     { img: assets.services_3 },
//     { img: assets.services_1 },
//   ]

//   return (
//     <div className='w-[70%] '>
//       <p > swimming </p>
//       <div className='flex flex-wrap gap-5  '>
//         {arr.map((item, index) => (
//           <div key={index} className='flex flex-col my-2 w-fit border-2 border-gray-300  items-center rounded-2xl px-5 p-3'>
//             <p className='text-4xl text-[#035657]'>{item.icon}</p>
//             <p>{item.title}</p>
//             <p>{item.desc}</p>
//           </div>
//         ))}
//       </div>
//       <div className='mt-5 border-2 border-gray-300 p-5 rounded-2xl '>
//         {arr_1.map((item, index) => (
//           <div key={index} className='flex flex-col my-2 w-full  items-start rounded-2xl px-2 p-2'>
//             <div className='text-4xl text-[#035657] flex gap-2 items-center'>
//   {item.icon}
//   <span className='font-bold text-xl py-1'>{item.title}</span>
// </div>

//             <p className='text-gray-600'>{item.desc}</p>
//           </div>
//         ))}
//       </div>
//       <div className='mt-5 border-2 border-gray-300 p-5 rounded-2xl '>
//         <p className=' text-3xl py-1 text-[#035657] flex gap-2'><span className='font-bold text-3xl'><MdOutlineDateRange /> </span> Schedule & Timing</p>
//         <div className='flex flex-wrap gap-3 py-2'>
//           {arr_2.map((item, index) => (
//             <div className='bg-[#EBF1F1] text-[#035657] px-5 py-1 rounded-xl w-fit' key={index}>
//               <p>{item.day}</p>
//             </div>
//           ))}
//         </div>

//         <div className='flex flex-wrap gap-3 py-3'>
//           {arr_3.map((item, index) => (
//             <div key={index} className='bg-[#21857C] text-white px-5 p-3 rounded-xl'>
//               <p>{item.title}</p>
//               <p>{item.time}</p>

//             </div>
//           ))}
//         </div>


//       </div>
//       <div className='mt-5 border-2 border-gray-300 p-5 rounded-2xl space-y-3'>
//         <p className=' text-3xl py-1 text-[#035657] flex gap-2'><span className='font-bold text-3xl'><MdOutlineDateRange /> </span> Our Trainers</p>
//         {arr_4.map((item, index) => (
//           <div
//             key={index}
//             className='bg-[#E5E7EB] rounded-md p-2 flex flex-wrap items-center gap-3'
//           >
//             <img src={item.img} className='w-16 h-16 rounded-full' />
//             <p>{item.desc}</p>
//           </div>
//         ))}
//       </div>
//       <div className='mt-5 border-2 border-gray-300 p-5 rounded-2xl  '>
//         <p className=' text-3xl py-2 text-[#035657] flex gap-2'> Gallary </p>
//         <div className='flex flex-wrap  gap-3'>
//           {arr_5.map((item, index) => (
//             <div key={index}>
//               <img src={item.img} className='w-[150px] h-[110px] rounded-lg' />
//             </div>
//           ))}
//         </div>

//       </div>
      
//           <div className='mt-5 border-2 border-gray-300 p-5 rounded-2xl  bg-[#EFF6FF]'>
//              <p className=' text-3xl py-2 text-[#035657] flex gap-2'> Additional Information Section </p>
//               <p className='w-[70%] text-[#4B4B4B]'> EXP: Locker rental available for extra 50 EGP/month. Private lessons available upon request. Swimming equipment shop on premises.</p>
//           </div>
//     </div>
//   )
// }

// export default Services_detail_contant
import React from 'react'
import { RiCoinsLine } from "react-icons/ri";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import assets from '../../assets/assets';

const Services_detail_contant = () => {

  const arr = [
    { icon: <RiCoinsLine />, title: 'Swimming', desc: "500 EGP" },
    { icon: <RiCoinsLine />, title: 'Swimming', desc: "500 EGP" },
    { icon: <RiCoinsLine />, title: 'Swimming', desc: "500 EGP" },
    { icon: <RiCoinsLine />, title: 'Swimming', desc: "500 EGP" },
    { icon: <RiCoinsLine />, title: 'Swimming', desc: "500 EGP" },
  ]

  const arr_1 = [
    { icon: <IoInformationCircleOutline />, title: 'About This Service', desc: "Our Swimming Academy offers professional training programs for all skill levels, from beginners to competitive swimmers. Our experienced coaches use proven techniques to help you improve your swimming skills, build endurance, and develop proper form. Whether you're looking to learn the basics, improve your technique, or train for competitions, our academy provides a supportive and professional environment." },
  ]

  const arr_2 = [
    { day: "Sunday" },
    { day: "Monday" },
    { day: "Wednesday" },
    { day: "Friday" },
  ];

  const arr_3 = [
    { title: "Morning Session", time: "9:00 AM" },
    { title: "Evening Session", time: "5:00 PM" }
  ]

  const arr_4 = [
    { img: assets.cotch_1 , desc: "Coach Ahmed Hassan - Olympic Trainer" },
    { img: assets.cotach_2 , desc: "Coach Sarah Ali - Senior Coach" },
    { img: assets.coatch_3 , desc: "Coach Mohamed Khaled - Trainer" }
  ]

  const arr_5 = [
    { img: assets.services_1  },
    { img: assets.services_2  },
    { img: assets.services_3  },
    { img: assets.services_2  },
    { img: assets.services_1 },
  ]

  return (
    <div className='w-[70%] mx-auto'>
      {/* Service Icons */}
      <p className='text-2xl font-bold py-2'>Swimming</p>
      <div className='flex flex-wrap gap-3'>
        {arr.map((item, index) => (
          <div key={index} className='flex flex-col my-2 w-[160px] border-2 border-gray-300 items-center rounded-2xl px-5 p-3'>
            <p className='text-4xl text-[#035657]'>{item.icon}</p>
            <p className='font-semibold'>{item.title}</p>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* About Section */}
      <div className='mt-5 border-2 border-gray-300 p-5 rounded-2xl'>
        {arr_1.map((item, index) => (
          <div key={index} className='flex flex-col my-2 w-full items-start rounded-2xl px-2 p-2'>
            <div className='text-4xl text-[#035657] flex gap-2 items-center'>
              {item.icon}
              <span className='font-bold text-xl py-1'>{item.title}</span>
            </div>
            <p className='text-gray-600'>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Schedule & Timing */}
      <div className='mt-5 border-2 border-gray-300 p-5 rounded-2xl'>
        <p className='text-3xl py-1 text-[#035657] flex gap-2 items-center'>
          <MdOutlineDateRange /> Schedule & Timing
        </p>

        <div className='flex flex-wrap gap-3 py-2'>
          {arr_2.map((item, index) => (
            <div key={index} className='bg-[#EBF1F1] text-[#035657] px-5 py-1 rounded-xl'>
              <p>{item.day}</p>
            </div>
          ))}
        </div>

        <div className='flex flex-wrap gap-3 py-3'>
          {arr_3.map((item, index) => (
            <div key={index} className='bg-[#21857C] text-white px-5 py-3 rounded-xl'>
              <p>{item.title}</p>
              <p>{item.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trainers */}
      <div className='mt-5 border-2 border-gray-300 p-5 rounded-2xl space-y-3'>
        <p className='text-3xl py-1 text-[#035657] flex gap-2 items-center'>
          <MdOutlineDateRange /> Our Trainers
        </p>
        {arr_4.map((item, index) => (
          <div key={index} className='bg-[#E5E7EB] rounded-md p-2 flex flex-wrap items-center gap-3'>
            {item.img && <img src={item.img} alt={`Trainer ${index}`} className='w-16 h-16 rounded-full' />}
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Gallery */}
      <div className='mt-5 border-2 border-gray-300 p-5 rounded-2xl'>
        <p className='text-3xl py-2 text-[#035657]'>Gallery</p>
        <div className='flex flex-wrap gap-3'>
          {arr_5.map((item, index) => (
            item.img && <div key={index}>
              <img src={item.img} alt={`Service ${index}`} className='w-[150px] h-[110px] rounded-lg' />
            </div>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <div className='mt-5 border-2 border-gray-300 p-5 rounded-2xl bg-[#EFF6FF]'>
        <p className='text-3xl py-2 text-[#035657] flex gap-2'>Additional Information</p>
        <p className='w-[70%] text-[#4B4B4B]'>
          EXP: Locker rental available for extra 50 EGP/month. Private lessons available upon request. Swimming equipment shop on premises.
        </p>
      </div>
    </div>
  )
}

export default Services_detail_contant;
