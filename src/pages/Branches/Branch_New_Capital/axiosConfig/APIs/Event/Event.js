import axiosInstance from "../../Instance";

export const Get_events=async(params)=>{
try{
    const response=await axiosInstance.get(
         `method/the_club_api.api.get_events`,  {params: params}
    );
    return response.data;

}
catch(error){
throw error;
}
}