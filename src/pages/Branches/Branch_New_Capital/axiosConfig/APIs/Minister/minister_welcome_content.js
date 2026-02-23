import axiosInstance from "../../Instance";

export const minister_welcome_content =async(params)=>{
    try{
        const response = await axiosInstance.get(
            `method/the_club_api.api.get_minister_welcome_content`, 
             {params: params,}
        );
      return response.data;

    }
     catch (error) {
        throw error;
    }
};