import { Router } from "express";
import {getRecipes,getARecipe,deleteRecipe,updateRecipe,createRecipe} from '../controllers/recipeController.js';
import { validateToken } from "../middlewares/authMiddleware.js";
const router = Router();

router.get('/',getRecipes);
router.get('/:id',getARecipe);
router.post('/',validateToken,createRecipe);
router.delete('/:id',validateToken,deleteRecipe);
router.put('/:id',validateToken,updateRecipe);

export default router