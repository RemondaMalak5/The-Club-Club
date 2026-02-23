
import axiosInstance from "../../Instance";

export const Championships_Details = async (params) => {
    try {
        const response = await axiosInstance.get(
            `method/the_club_api.api.get_championship_details`,
            {params: params,}
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};