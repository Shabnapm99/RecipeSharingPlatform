import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import UserModel from '../models/UserModel.js';

dotenv.config();

export const validateToken = async (req, res, next) => {
    try {
        const token = req.cookies.token;//access token from cookies
        if (!token) {
            return res.status(401).json({ message: "Token not available" });
        }
        let decoded = jwt.verify(token, process.env.JWT_TOKEN);
        if (!decoded) {
            return res.status(401).json({ message: "User not authenticated" });
        }
        let userId = decoded._id;
        const user = await UserModel.findOne({ _id: userId });
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        req.user = user;//pass the authenticated user to req so that we can access it from anywhere
        next();//Middleware must call next() to pass control to the next route.
    } catch (error) {
        res.status(404).json({ message: "Page not found" });
    }
}