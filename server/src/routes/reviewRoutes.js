import { Router } from 'express'
import { addReview } from '../controllers/reviewController.js';
import { validateToken } from '../middlewares/authMiddleware.js';

const router = Router();


router.post('/:id/reviews', validateToken, addReview);

export default router