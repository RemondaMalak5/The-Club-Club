import axiosInstance from "../../../Instance";

export const user_login =async (body)=>{
    try{
            const response =await axiosInstance.post(
                `method/the_club_api.api.user_login`,
                body)
                return response.data
    }
    catch(error){
         throw error ;
    }

}