import express from 'express';
import dotenv from 'dotenv';
import authRoute from './src/routes/authRoutes.js'
import recipesRoute from './src/routes/recipeRoutes.js'
import { dbConnect } from './src/config/db.js';

//configure dotenv
dotenv.config();
//configure express
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).json("Home page of recipe sharing platform");
});

app.use('/api',authRoute);
app.use('api/recipes',recipesRoute);

dbConnect();//connecting to db

if (process.env.NODE_ENV !== 'production' && process.env.VERCEL !== '1') {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

export default app;//while deploying in versel we need to export app

