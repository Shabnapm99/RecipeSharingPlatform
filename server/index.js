import express from 'express';
import dotenv from 'dotenv';
import authRoute from './src/routes/authRoutes.js';
import recipesRoute from './src/routes/recipeRoutes.js';
import { dbConnect } from './src/config/db.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import favoriteRoutes from './src/routes/favoritesRoutes.js'
import reviewRouter from './src/routes/reviewRoutes.js';
import adminRoute from './src/routes/adminRoutes.js';


//configure dotenv
dotenv.config();
//configure express
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());//after cookie parser runs, cookies are available in req.cookies
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true//to access the cookies
}))

app.get('/', (req, res) => {
    res.status(200).json("Home page of recipe sharing platform");
});

app.use('/api', authRoute);
app.use('/api/recipes', recipesRoute);
app.use('/api/recipes', reviewRouter);
app.use('/api/favorites', favoriteRoutes);
app.use('/api/admin', adminRoute);

dbConnect();//connecting to db

if (process.env.NODE_ENV !== 'production' && process.env.VERCEL !== '1') {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

export default app;//while deploying in versel we need to export app

