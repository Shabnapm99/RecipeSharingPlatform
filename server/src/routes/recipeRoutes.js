import { Router } from "express";
import {getRecipes,getARecipe,deleteRecipe,updateRecipe,createRecipe} from '../controllers/recipeController.js'
const router = Router();

router.get('/',getRecipes);
router.get('/:id',getARecipe);
router.post('/',createRecipe);
router.delete('/:id',deleteRecipe);
router.put('/:id',updateRecipe);

export default router