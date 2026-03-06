import RecipeModel from "../models/RecipeModel.js";
import uploadToCloudinary from "../utils/imageUpload.js";

//get all recipes
export const getRecipes = async (req, res) => {
    try {

        let recipes = await RecipeModel.find({}).select('-__v').populate("createdBy", "name")
        res.status(200).json({ recipes })

    } catch (error) {
        console.log("Something went wrong:", error.message);
        res.status(500).json({
            message: "Internal server Error"
        })
    }

}

//get one recipe

export const getARecipe = async (req, res) => {
    try {

        let recipe = await RecipeModel.findById(req.params.id).select('-__v').populate('createdBy', 'name');
        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" })
        }
        res.status(200).json({ recipe });

    } catch (error) {
        console.log("Something went wrong:", error.message);
        res.status(500).json({
            message: "Internal server Error"
        })
    }
}

//create a recipe

export const createRecipe = async (req, res) => {
    try {
        const { title,
            description,
            ingredients,
            instructions,
            cookingTime,
            cuisine,
            difficulty,
            dietType } = req.body;

        //validate for all required fields
        if (!title || !description || !ingredients || !instructions || !cookingTime) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        if (!req.file) {
            return res.status(400).json({ message: "Image not added" })
        }
        //check for existing recipe : ensure the user have not already added the recipe
        let existingRecipe = await RecipeModel.findOne({ title: title, createdBy: req.user._id })
        if (existingRecipe) {
            return res.status(400).json({ message: "Recipe already exist" })
        }

        const cloudinaryResponse = await uploadToCloudinary(req.file.path);//send file path as parameter
        console.log(cloudinaryResponse)
        const recipe = {
            title,
            description,
            ingredients,
            instructions,
            image: cloudinaryResponse,
            cookingTime,
            cuisine,
            difficulty,
            dietType,
            createdBy: req.user._id
        }

        const newRecipe = await RecipeModel.create(recipe);

        res.status(201).json({
            message: "Recipe created successfully",
            recipe: newRecipe
        })

    } catch (error) {
        console.log("Something went wrong:", error.message);
        res.status(500).json({
            message: "Internal server Error"
        })
    }

}

//Delete recipe

export const deleteRecipe = async (req, res) => {
    try {
        let recipeTodelete = await RecipeModel.findOneAndDelete({ _id: req.params.id, createdBy: req.user._id });//to ensure the recipe is created by loggedin user.ie, only author can delete a rceipe

        if (!recipeTodelete) {
            return res.status(404).json({
                message: "Recipe not found or not authorized"
            });
        }

        res.status(200).json({ message: "Recipe deleted successfully" });

    } catch (error) {
        console.log("Something went wrong:", error.message);
        res.status(500).json({
            message: "Internal server Error"
        })
    }
}

export const updateRecipe = async (req, res) => {
    try {
        let updatedRecipe = await RecipeModel.findOneAndUpdate({ _id: req.params.id, createdBy: req.user._id }, req.body, { new: true, runValidators: true });//only the author can update a recipe
        if (!updatedRecipe) {
            return res.status(404).json({
                message: "Recipe not found or not authorized"
            });
        }

        res.status(200).json({
            message: "Recipe updated successfully",
            recipe: updatedRecipe
        })
    } catch (error) {
        console.log("Something went wrong:", error.message);
        res.status(500).json({
            message: "Internal server Error"
        })
    }

}