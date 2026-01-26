import axiosInstance from "../../Instance";

export const our_club =async(params)=>{
    try{
        const response = await axiosInstance.get(
            `method/the_club_api.api.get_our_club_content`, 
             {params: params,}
        );
      return response.data;

    }
     catch (error) {
        throw error;
    }
};

