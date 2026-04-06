import { Router } from "express";
import { register, login, logout, getAllUsers, updateUserStatus } from "../controllers/adminController.js";
import { authAdmin } from "../middlewares/authAdmin.js";

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/users', authAdmin, getAllUsers);
router.put('/users/:id/status', authAdmin, updateUserStatus);

export default router;