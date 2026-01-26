import axiosInstance, { Authorization_Token_Main } from "../../Instance";

export const examle_post_api = async (body) => {
  try {
    const response = await axiosInstance.post(
      `endpoint`,
      body,
      {
        headers: {
          Authorization: `${Authorization_Token_Main}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};