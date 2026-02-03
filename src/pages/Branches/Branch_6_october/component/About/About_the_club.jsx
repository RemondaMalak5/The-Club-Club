import { useEffect, useState } from 'react'
import { About_API } from '../../axiosConfig/APIs/About/About'
import i18next from 'i18next';
import LoaderSpinner from '../../../../../components/Shared_Componant/LoaderSpinner';

const About_the_club = () => {
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
                <div className='flex justify-center items-center h-[60vh] about_club_template '>
                    <LoaderSpinner />
                </div>
                :
                <div>
                    {error ?
                        <p className='text-red-600 w-full text-center my-12  '>{error}</p>
                        :
                        <div className='flex flex-col gap-y-4 '>
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

export default About_the_club