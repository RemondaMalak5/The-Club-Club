import axiosInstance from "../../Instance";

export const Edit_phone = async (body) => {
  try {
    const response = await axiosInstance.post(
        'method/the_club_api.api.get_academies_list',
        body  );
    return response.data;
  } catch (error) {
    throw error;
  }
};