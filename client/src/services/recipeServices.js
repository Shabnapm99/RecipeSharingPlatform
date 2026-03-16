import { axiosInstance } from "../axios/axiosInstance";

export const getRecipes = () => {
    return axiosInstance.get('/recipes')
}

export const addrecipe = (data) => {
    return axiosInstance.post('/recipes', data, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
}

export const deleteRecipe = (id, data) => {
    console.log("delted")
    return axiosInstance.delete(`/recipes/${id}`, data);
}

export const updateRecipe = (id, data) => {
    return axiosInstance.put(`/recipes/${id}`, data);
}

export const addReview = (id, review) => {
    return axiosInstance.post(`/recipes/${id}/reviews`, review);
};

export const popularRecipes = () => {
    return axiosInstance.get('/recipes/popular')
}

export const getQuickRecipes = () => {
    return axiosInstance.get('/recipes/quick')
}