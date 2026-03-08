import { axiosInstance } from "../axios/axiosInstance";

export const getRecipes = () => {
    return axiosInstance.get('/recipes')
} 