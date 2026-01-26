import axiosInstance from "../../Instance";

export const payment_history = async (params) => {
  try {
    const response = await axiosInstance.get(
      `method/the_club_api.api.get_payment_history`, { params: params });
    return response.data;
  } catch (error) {
    console.error("Error fetching payment history:", error);
    throw error;
  }
}