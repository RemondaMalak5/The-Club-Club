import axiosInstance from "../../Instance";

export const Get_academies_list = async (params) => {
    try {
        const response = await axiosInstance.get(
            `method/the_club_api.api.get_academies_list`
            , { params: params });
        return response.data;
    }
    catch(error) {
        throw error;
    }
}