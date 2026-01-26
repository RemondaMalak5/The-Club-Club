import axiosInstance from "../../Instance";

export const create_booking_playground = async (body) => {
  try {
    const response = await axiosInstance.post(
      `method/the_club_api.api.create_booking_playground`,body);
    return response.data;
  } catch (error) {
    throw error;
  }
};