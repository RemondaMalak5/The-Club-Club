import axiosInstance from "../../Instance";

export const get_Customer_Details = async (body) => {
  try {
    const response = await axiosInstance.post(
        'method/the_club_api.api.get_customer_details',
        body  );
    return response.data;
  } catch (error) {
    throw error;
  }
};