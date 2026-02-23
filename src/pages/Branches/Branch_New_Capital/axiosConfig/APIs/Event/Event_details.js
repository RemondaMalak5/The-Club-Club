import axiosInstance from "../../Instance";

export const event_details = async (params) => {
    try {
        const response = await axiosInstance.get(
            `method/the_club_api.api.get_events_details`,
            {params: params,}
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};