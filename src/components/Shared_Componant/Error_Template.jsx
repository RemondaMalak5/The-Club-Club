import assets from "../../assets/assets"

const Error_Template = ({ msg }) => {
    return (
        <div>
            {msg ?
                <div className='text-red-500 text-center my-5'>{msg}</div>
                :
                <div className='text-red-500 text-center my-5 '>
                    
                    {/* <img src={assets.falier} className="w-80 rounded-3xl"/> */}

                    يوجد خطأ ما، يرجى المحاولة مرة أخرى لاحقاً
                </div>
            }
        </div>
    )
}

export default Error_Template