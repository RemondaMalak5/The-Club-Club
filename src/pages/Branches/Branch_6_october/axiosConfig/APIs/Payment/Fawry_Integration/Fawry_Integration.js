import axiosInstance from "../../../Instance";

export const Fawry_Integration_API = async (params) => {
    try {
        const response = await axiosInstance.get(
            `/method/the_club_api.fawry.get_member_subscriptions`,
        {params});
        return response.data;
    } catch (error) {
        throw error;
    }
};