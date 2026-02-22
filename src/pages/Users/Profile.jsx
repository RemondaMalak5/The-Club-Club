import { useEffect, useState } from 'react'
// import { get_Customer_Details } from '../../axiosConfig/APIs/profile/customer_details';

// import LoaderSpinner from '../../components/Shared_Components/LoaderSpinner';
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';

// import Edit_Profile from './Edit_Profile';
// import Edit_phone from './Edit_phone';

const Profile = () => {
  const [data, setData] = useState(null);
  const [change_image, setChangeImage] = useState(1);
  const { t } = useTranslation();

  const membership_no_cookies = Cookies.get("membership_no")
//   const Customer_details_api = async () => {
//     const body = {
//       "membership_no": membership_no_cookies,
//       "branch": "نادي النادي - 6 اكتوبر"
//     };

//     try {
//       const response = await get_Customer_Details(body);
//       setData(response.message.data.customer);
//       console.log("response", response);
//     } catch (err) {
//       console.log("error", err);
//     }
//   };
//   useEffect(() => {
//     Customer_details_api();
//   }, [change_image]);

  const infoMeber = [
    { title: t("Name"), value: data?.customer_name },
    { title: t("Phone"), value: data?.phone, edit: true },
    { title: t("Member_Number"), value: data?.membership_no },
    { title: t("Branch"), value: data?.branch },
    { title: t("Age"), value: data?.age },
  ];

  return (
    <div className='md:px-20 px-4'>
      helllllo
      {data ?
        <div className='bg-[#fff] border border-[#eee] 
        shadow-lg rounded-[12px] py-6 my-4 flex md:flex-row flex-col gap-10 '>
          <div className='flex items-center justify-center'>
            <div className=' md:ms-10 relative
          w-[150px] h-[150px] border-[3px] border-[#cccbcb] rounded-full
          '>
              {/* <Edit_Profile change_image={change_image} setChangeImage={setChangeImage} /> */}
              <img src={data.image} className='w-full h-full rounded-full' />
            </div>
          </div>
          <div className='flex flex-col gap-3 items-center justify-center
            lg:w-1/2 w-full px-2'>
            {infoMeber.map((item, index) => (
              <div key={index} className='flex w-full xs:flex-row flex-col xs:text-start text-center'>
                <div className='border bg-[#EEEEEE] rounded-s-md p-2 w-full'>
                  <p>{item.title}</p>
                </div>
                {!item.edit ?
                  <div className='border px-4 rounded-e-md p-2 w-full xs:text-right text-center'>
                    <p>{item.value || "-----"}</p>
                  </div>
                  :
                  <div className='border px-4 rounded-e-md p-2 w-full
                  xs:text-right text-center
                  flex flex-row-reverse justify-between items-center
                  '>
                    <p>{item.value || "-----"}</p>
                    {/* <Edit_phone /> */}
                  </div>
                
                }
              </div>
            ))}
          </div>
        </div>
        :
        <div className='w-full h-[50vh] flex items-center justify-center'>
          {/* <LoaderSpinner /> */}
        </div>
      }
    </div>
  );
};

export default Profile;