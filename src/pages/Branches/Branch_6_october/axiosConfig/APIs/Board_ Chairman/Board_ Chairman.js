import axiosInstance from "../../Instance";


export const board_chairman = async (params) => {
  try {
    const response = await axiosInstance.get(
        `method/the_club_api.api.get_board_chairman_word`
        , { params: params });
    return response.data;
  } catch (error) {
    console.error("Error fetching board chairman data:", error);
    throw error
  }
}