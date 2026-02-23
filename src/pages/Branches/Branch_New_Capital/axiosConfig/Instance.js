import axios from "axios";

export const mainUrl ='http://156.200.122.85:100/'; //test
// export const mainUrl ='http://156.200.122.86:5174/'; //live

const apiUrl = `${mainUrl}api`; 

// export const Authorization_Token_Main = "token 123";

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;