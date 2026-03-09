import FavoriteModel from "../models/FavoriteModel.js";
import RecipeModel from "../models/RecipeModel.js";

//Add to Favorites
export const addToFavorites = async (req, res) => {
    try {
        let user = req.user;// from validateToken middleware
        let id = req.params.id;
        //check for the recipe 
        let recipe = await RecipeModel.findById(id);
        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" })

        }

        //check whether the user already have a favorites list in db

        let favoriteRecipes = await FavoriteModel.findOne({ userId: user._id });//check whether there is alraedy a favorite list for the user
        if (!favoriteRecipes) {
            favoriteRecipes = new FavoriteModel({ userId: user._id, recipes: [] })//if there is no favorite list for the user create one(document)
        }
        //check if the recipe already added to favorites
        let isExisting = favoriteRecipes.recipes.some((recipe) => recipe._id.equals(id))
        if (isExisting) {
            return res.status(400).json({ message: "Recipe already exist in favorites" })
        }
        favoriteRecipes.recipes.push(id)//add the recipe id to recipes favorite recipes array 
        await favoriteRecipes.save()//save the instance of documnet

        res.status(201).json({ message: "Recipe added to favorites", favoriteRecipes })

    } catch (error) {
        console.log("Something went wrong:", error.message);
        res.status(error.status || 500).json({
            message: "Internal server Error"
        })

    }
}

//get all favorite recipes of a user
export const getFavorites = async (req, res) => {
    try {
        let user = req.user;
        let favoriteRecipes = await FavoriteModel.findOne({ userId: user._id }).populate({
            path: "recipes",
            populate: {
                path: "createdBy",
                select: "name"
            }//nested populate to get author name
        }).select('-__v');
        if (!favoriteRecipes) {
            return res.status(400).json({ message: "No recipes saved yet" })
        }
        res.status(200).json({ favoriteRecipes })
    } catch (error) {
        console.log("Something went wrong:", error.message);
        res.status(error.status || 500).json({
            message: "Internal server Error"
        })

    }
}

// update favorites of a user
export const removeFavorite = async (req, res) => {
    try {
        let user = req.user;
        let id = req.params.id;

        //check whether there is a favorite list document for the user
        let favoriteRecipes = await FavoriteModel.findOne({ userId: user._id });
        if (!favoriteRecipes) {
            return res.status(400).json({ message: "Favorite recipes not found" });
        }
        favoriteRecipes.recipes = favoriteRecipes.recipes.filter((recipe) => !recipe._id.equals(id));
        await favoriteRecipes.save();//save the changes to this instance or duocument

        res.status(200).json({
            message: "Recipe removed from favorite list",
            favoriteRecipes
        })

    } catch (error) {
        console.log("Something went wrong:", error.message);
        res.status(error.status || 500).json({
            message: "Internal server Error"
        })

    }
}
