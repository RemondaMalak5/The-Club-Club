import axiosInstance from "../../Instance";

export const gallary =async(params)=>{
    try{
        const response = await axiosInstance.get(
            `method/the_club_api.api.get_gallery`, 
             {params: params,}
        );
      return response.data;

    }
     catch (error) {
        throw error;
    }
};