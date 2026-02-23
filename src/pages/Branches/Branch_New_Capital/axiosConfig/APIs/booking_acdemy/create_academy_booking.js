import axiosInstance from "../../Instance";

export const create_academy_booking = async (body) => {
  try {
    const response = await axiosInstance.post(
      `method/the_club_api.api.create_academy_booking`,body);
    return response.data;
  } catch (error) {
    throw error;
  }
};