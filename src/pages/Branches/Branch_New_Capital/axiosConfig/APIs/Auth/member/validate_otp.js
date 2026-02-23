import axiosInstance from "../../../Instance";

const validateOtp = async (body) => {
  try {
    const response = await axiosInstance.post(
        `method/the_club_api.api.validate_member_otp_and_create_user`,  body );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default validateOtp;
