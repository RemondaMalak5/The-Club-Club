import axiosInstance from "../../Instance";

export const Receipt_Payment = async (params) => {
    try {
        const response = await axiosInstance.get(
            `method/the_club_api.fawry_callback.fawry_callback`,
            { params: params }
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};