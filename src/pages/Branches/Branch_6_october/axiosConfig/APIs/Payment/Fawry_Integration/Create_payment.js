import axiosInstance from "../../../Instance";

const Create_payment_API = async (body)=>{
    try {   
        const response = await axiosInstance.post(
            `method/the_club_api.fawry.create_payment`,
            body)
        return response.data;
    }
     catch (error) {
    throw error;
  }
}

export default Create_payment_API;