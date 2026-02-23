import axiosInstance from "../../Instance";

export const board_member = async(params)=>{
    try {
        const response = await axiosInstance.get(
            `method/the_club_api.api.get_board_members`,
            {params: params}
        );
        return response.data;
    } 
    catch (error) {
        throw error;
    }
};