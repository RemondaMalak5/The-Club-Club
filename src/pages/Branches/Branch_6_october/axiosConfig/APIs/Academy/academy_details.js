import axiosInstance from "../../Instance";

export const Get_academies_details = async (params) => {
    try {
        const response = await axiosInstance.get(
            `method/the_club_api.api.get_academy_details`
            , { params: params });
        return response.data;
    }
    catch(error) {
        throw error;
    }
}