import axiosInstance from "../Instance";


export const About_API = async (params) => {
  try {
    const response = await axiosInstance.get(
        `method/the_club_api.api.get_about_the_club_content`
        , { params: params });
    return response.data;
  } catch (error) {
    console.error("Error fetching board chairman data:", error);
    throw error
  }
}