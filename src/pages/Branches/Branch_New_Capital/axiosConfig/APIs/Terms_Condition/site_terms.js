import axiosInstance from "../../Instance";


export const getSiteTerms = async (params) => {
  try {
    const response = await axiosInstance.get(
        `method/the_club_api.api.get_site_terms`,
        {params: params}
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching site terms:", error);
    throw error;
  }
}