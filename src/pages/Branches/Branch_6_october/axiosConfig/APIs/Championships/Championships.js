import axiosInstance from "../../Instance";

export const get_club_championships=async(params)=>{
try{
    const response=await axiosInstance.get(
         `method/the_club_api.api.get_club_championships`,  {params: params,}
    );
    return response.data;

}
catch(error){
throw error;
}
}