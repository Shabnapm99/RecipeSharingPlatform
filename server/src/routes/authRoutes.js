import { Router } from "express";
import { login, register, profile, logout } from "../controllers/authController.js";
import { validateToken } from "../middlewares/authMiddleware.js";

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.get('/profile', validateToken, profile);
router.post('/logout', logout);

export default router