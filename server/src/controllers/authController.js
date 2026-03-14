import UserModel from "../models/UserModel.js";
import bcrypt from 'bcrypt';
import { validateRegistration } from "../utils/validateRegistration.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'


dotenv.config();
//User login 
export const login = async (req, res) => {
    try {

        let { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" })
        }
        email = email?.toLowerCase().trim();
        //check for the user in the DB

        let user = await UserModel.findOne({ email: email }).select('-__v').populate('addedRecipes');
        //if there is no user registered on this email id
        if (!user) {
            return res.status(400).json({ message: "Incorrect email or password" })
        }
        //compare the password with the hashed password 
        let isMatch = await bcrypt.compare(password, user.password_hash);
        if (isMatch) {
            const token = jwt.sign({ _id: user._id }, process.env.JWT_TOKEN, { expiresIn: process.env.JWT_EXPIRESIN });

            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
            });//create a cookie named token with value token and other credentials

            return res.status(200).json({
                message: "LoggedIn successfully",
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    occupation: user.occupation,
                    favoriteRecipes: user.favoriteRecipes,
                    addedRecipes: user.favoriteRecipes
                }//to prevent secured info like hashedpassed from sending back, send needed fields only
            })
        } else {
            return res.status(400).json({ message: "The provided email or password is not matching" })
        }

    } catch (error) {
        console.log("Something went wrong:", error.message);
        res.status(error.status || 500).json({
            message: "Internal server Error",
            error: error.message

        })
    }

}

//user registration

export const register = async (req, res) => {
    try {
        let { name, email, password, occupation } = req.body;
        email = email?.toLowerCase().trim();//converts the entered email(if exist) to lowercase since in db we are saving it in lowercase

        //validation 
        const validationError = validateRegistration({ name, email, password, occupation });
        if (validationError) {
            return res.status(400).json({ message: validationError });

        }//If we didn't return here ,Even if validation fails:It sends response, BUT code continues running,It still checks DB,It still hashes password,It still tries to create user

        //check whether the user already exist
        const isExisting = await UserModel.exists({ email: email });//since we only have to check whether the user exist. no need to fecth it. exists increase the speed
        if (isExisting) {
            return res.status(400).json({ message: "User Already exist!!Continue to login" });
        }

        // Hashing the password

        let salt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(password, salt);

        let newUser = await UserModel.create({
            name,
            email,
            password_hash: hashedPassword,
            occupation
        });

        if (!newUser) {
            return res.status(400).json({ message: "User is not created" })//to check whether user is created properly in db or not
        }
        return res.status(201).json({
            message: "User created successfully"
        });
    } catch (error) {
        console.log("Something went wrong:", error.message);
        res.status(error.status || 500).json({
            message: "Internal server Error",
            error: error.message

        })
    }
}

//get profile

export const profile = async (req, res) => {
    try {
        const user = req.user;// set by validateToken
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        return res.status(200).json({ user });

    } catch (error) {
        console.log("Something went wrong:", error.message);
        res.status(error.status || 500).json({
            message: "Internal server Error",
            error: error.message

        })
    }
}

//logout 
export const logout = async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
        });
        res.status(200).json({ message: 'Logged out successfully' })

    } catch (error) {
        console.log("Something went wrong:", error.message);
        res.status(error.status || 500).json({
            message: "Internal server Error",
            error: error.message

        })
    }
}