import { axiosInstance } from "../axios/axiosInstance"

export const getUsers = () => {
    return axiosInstance.get('/admin/users');
}

// export