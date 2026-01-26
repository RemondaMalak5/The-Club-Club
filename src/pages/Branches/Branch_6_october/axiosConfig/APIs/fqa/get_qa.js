import axiosInstance from "../../Instance";

export const getFAQ = async (params) => {
  try {
    const response = await axiosInstance.get(
        `method/the_club_api.api.get_qa_by_language`
        , { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching FAQ:", error);
    throw error;
  }
}
