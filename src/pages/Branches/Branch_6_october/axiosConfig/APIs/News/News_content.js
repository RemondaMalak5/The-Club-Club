import axiosInstance    from "../../Instance";

export const News_content =async(params)=>{
    try{
        const response = await axiosInstance.get(
            `method/the_club_api.api.get_news_content`,  {params: params,}
        );
      return response.data;

    }
     catch (error) {
        throw error;
    }
};