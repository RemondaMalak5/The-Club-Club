import axiosInstance from "../../Instance";


export const getMySports = async (params) => {
  try {
    const response = await axiosInstance.get(
        `method/the_club_api.api.get_customer_academies`,
        {params: params}
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching my sports:", error);
    throw error;
  }
}