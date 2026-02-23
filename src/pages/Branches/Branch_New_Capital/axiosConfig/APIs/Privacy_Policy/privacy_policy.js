import axiosInstance from "../../Instance";

export const getPrivacyPolicy = async (params) => {
  try {
    const response = await axiosInstance.get(
        `method/the_club_api.api.get_privacy_policy`
        , { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching privacy policy:", error);
    throw error;
  }
}