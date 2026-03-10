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