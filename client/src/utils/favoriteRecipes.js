import { axiosInstance } from "../axios/axiosInstance";

export async function addToFavorite(recipeId) {
    try {
        let response = await axiosInstance.post(`/favorites/addtofavorite/${recipeId}`);
        if (response.status === 201) console.log(response)

    } catch (error) {
        console.log(error.message)
    }
}

export async function removeFromFavorite(recipeId) {
    try {
        let response = await axiosInstance.delete(`/favorites/removefavorite/${recipeId}`);
        if (response.status === 200) console.log(response)

    } catch (error) {
        console.log(error.message)
    }
}