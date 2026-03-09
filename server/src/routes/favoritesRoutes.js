import { Router } from 'express';
import { validateToken } from '../middlewares/authMiddleware.js';
import { addToFavorites, getFavorites, removeFavorite } from '../controllers/favoritesController.js'
const router = Router();

router.post('/addtofavorite/:id', validateToken, addToFavorites);
router.get('/getfavorites', validateToken, getFavorites);
router.delete('/removefavorite/:id',validateToken,removeFavorite);

export default router