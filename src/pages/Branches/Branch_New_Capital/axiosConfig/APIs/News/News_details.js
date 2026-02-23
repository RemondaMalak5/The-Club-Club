
import axiosInstance from "../../Instance";

export const News_detais = async (params) => {
    try {
        const response = await axiosInstance.get(
            `method/the_club_api.api.get_news_details`,
            {params: params,}
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};