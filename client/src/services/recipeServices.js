import { axiosInstance } from "../axios/axiosInstance";

// export const getRecipes = () => {
//     return axiosInstance.get('/recipes')
// } 

// export const getAddedRecipes = async (userId) => {
//     let response = await axiosInstance.get('/recipes');
//     let addedRecipes = response.data.recipes.filter((recipe) => {
//         return recipe.createdBy._id === userId
//     })
//     return addedRecipes
// }

export const addrecipe = (data) => {
    return axiosInstance.post('/recipes', data)
}

export const deleteRecipe = (id, data) => {
    console.log("delted")
    return axiosInstance.delete(`/recipes/${id}`, data);
}

export const updateRecipe = (id,data) => {
    return axiosInstance.put(`/recipes/${id}`,data);
}