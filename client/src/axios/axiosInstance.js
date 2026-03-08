import axios from 'axios'

const url = import.meta.env.VITE_BASE_URL;
console.log(url)

export const axiosInstance = axios.create({
    baseURL:url,
    withCredentials:true//to access cookies and all
})