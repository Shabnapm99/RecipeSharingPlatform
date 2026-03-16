import { Router } from "express";
import { getRecipes, getARecipe, deleteRecipe, updateRecipe, createRecipe, getUserAddedRecipe, popularRecipes, quickRecipes } from '../controllers/recipeController.js';
import { validateToken } from "../middlewares/authMiddleware.js";
import { upload } from "../middlewares/multer.js";
const router = Router();

router.get('/', getRecipes);
router.get('/popular', popularRecipes);
router.get('/quick', quickRecipes);
router.get('/my-recipes', validateToken, getUserAddedRecipe);
router.get('/:id', getARecipe);
router.post('/', validateToken, upload.single("image"), createRecipe);//single → only one file , "image" → the name of the form field
router.delete('/:id', validateToken, deleteRecipe);
router.put('/:id', validateToken, upload.single("image"), updateRecipe);



export default router