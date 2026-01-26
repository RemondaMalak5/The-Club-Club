import axiosInstance from "../../Instance";

export const Edit_profile = async (body) => {
  try {
    const response = await axiosInstance.post(
        'method/the_club_api.api.edit_image',
        body  );
    return response.data;
  } catch (error) {
    throw error;
  }
};