import axiosInstance from "../../Instance";

export const getSlider = async () => {
  try {
    const response = await axiosInstance.get(
        `method/the_club_api.api.get_home_sliders`,  );
    return response.data;
  } catch (error) {
    console.error("Error fetching slider data:", error);
    throw error; // Re-throw the error for further handling if needed
  }
}