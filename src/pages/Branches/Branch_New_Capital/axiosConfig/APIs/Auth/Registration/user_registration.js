import axiosInstance from "../../../Instance";

const user_registration = async (body)=>{
    try {   
        const response = await axiosInstance.post(
            `method/the_club_api.api.user_registration`,
            body)
        return response.data;
    }
     catch (error) {
    throw error;
  }
}

export default user_registration;