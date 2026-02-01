import { useEffect, useState } from 'react'
import { About_API } from '../../axiosConfig/APIs/About/About'
import LoaderSpinner from '../Shared_Components/LoaderSpinner';
import i18next from 'i18next';

const About_Template = () => {

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    const About_API_Handle = async () => {
        const params = {
            lang: i18next.language,
            branch: "نادي النادي - 6 اكتوبر"
        }
        setLoading(true)
        try {
            const res = await About_API(params)
            setData(res.message)
        } catch (err) {
            setError("يوجد مشكله في الاتصال")
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        About_API_Handle()
    }, [i18next.language])

    return (
        <div>
            {loading ?
                <div className='flex justify-center items-center h-[60vh] about_club_template'>
                    <LoaderSpinner />
                </div>
                :
                <div>
                    {error ?
                        <p className='text-red-600 w-full text-center my-12'>{error}</p>
                        :
                        <div className='flex flex-col gap-y-4'>
                            {data?.map((item, idx) => (
                                <div key={idx} className={`
                                ${idx % 2 === 0 ? "about_club_about " : "bg-[#ffffff] "}
                                flex gap-y-4 px-6 flex-wrap about_club_template`}>
                                    <div className='text-[#000]  mt-5 w-full px-2 font-bold text-2xl pt-3'>
                                        <span className={`
                                ${idx % 2 === 0 ? "text-white " : "text-black "}`}>
                                            {item.title}
                                        </span>
                                    </div>
                                    <div className={`
                                ${idx % 2 === 0 ? "text-white " : "text-black "} md:w-2/3 w-full p-2 my-4`}>
                                        {item.description}
                                    </div>
                                    <div className='md:w-1/3 w-full  flex 
                                    justify-center items-center'>
                                        <img src={item.photo} alt={item.title}
                                            loading="lazy"
                                            className='max-h-[350px] w-full sm:p-8 p-2 '
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            }
        </div>
    )
}

export default About_Template


// import { useEffect, useState } from 'react'
// import { About_API } from '../../axiosConfig/APIs/About/About'
// import LoaderSpinner from '../Shared_Components/LoaderSpinner';
// import { useTranslation } from 'react-i18next';

// const About_Template = () => {
//   const [data, setData] = useState();
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState("")
//   const { i18n } = useTranslation("")

//   const About_API_Handle = async () => {
//     const params = {
//       lang: i18n.language,
//       branch: "نادي النادي - 6 اكتوبر"
//     }
//     setLoading(true)
//     try {
//       const res = await About_API(params)
//       setData(res.message)
//     } catch (err) {
//       setError("يوجد مشكله في الاتصال")
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     About_API_Handle()
//   }, [i18n.language])

//   return (
//     <div>
//       {loading ? (
//         <div className='flex justify-center items-center h-[60vh]'>
//           <LoaderSpinner />
//         </div>
//       ) : error ? (
//         <p className='text-red-600 w-full text-center my-12'>{error}</p>
//       ) : (
//         <div className='flex flex-col gap-y-8'>
//           {data?.map((item, idx) => {
//             const isEven = idx % 2 === 0;

//             return (
//               <div
//                 key={idx}
//                 className={`w-full flex flex-col md:flex-row items-center justify-between rounded-xl overflow-hidden shadow-md 
//                 ${isEven ? "text-white bg-cover bg-center" : "bg-white text-black"}
//                 p-6`}
//                 style={{
//                   backgroundImage: isEven ? `url(${item.photo})` : 'none',
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center',
//                 }}
//               >
//                 <div className={`flex flex-col md:flex-row w-full items-center gap-6 ${!isEven ? "flex-row-reverse" : ""}`}>
//                   {/* الصورة */}
//                   <div className='md:w-1/2 w-full'>
//                     <img
//                       src={item.photo}
//                       alt={item.title}
//                       loading='lazy'
//                       className='w-full h-auto max-h-[350px] object-contain rounded-xl'
//                     />
//                   </div>

//                   {/* النص */}
//                   <div className='md:w-1/2 w-full'>
//                     <h2 className='text-2xl font-bold mb-3'>{item.title}</h2>
//                     <div
//                       className='text-lg leading-relaxed'
//                       dangerouslySetInnerHTML={{ __html: item.description }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

// export default About_Template;
