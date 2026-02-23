import axiosInstance from "../../Instance";

export const siteContactInfo = async (params) => {
  try {
    const response = await axiosInstance.get(
        `method/the_club_api.api.get_site_contact_info`
        , { params: params });
    return response.data;
  } catch (error) {
    console.error("Error fetching site contact info:", error);
    throw error
  }
}
