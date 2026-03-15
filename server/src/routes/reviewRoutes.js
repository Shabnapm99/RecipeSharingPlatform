import { Router } from 'express'
import { getReview, addReview } from '../controllers/reviewController.js';
import { validateToken } from '../middlewares/authMiddleware.js';

const router = Router();

router.get('/:id/reviews', getReview);
router.post('/:id/reviews',validateToken, addReview);

export default router