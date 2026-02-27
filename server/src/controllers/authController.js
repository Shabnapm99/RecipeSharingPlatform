import UserModel from "../models/UserModel.js";
import bcrypt from 'bcrypt';
import { validateRegistration } from "../utils/validateRegistration.js";

//User login 

export const login = () => {

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
        const isExisting = await UserModel.findOne({ email: email });
        if (isExisting) {
            return res.status(400).json({ message: "User Already exist!!Continue to login" });
        }

        // Hashing the password

        let salt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(password, salt);

        await UserModel.create({
            name,
            email,
            password_hash: hashedPassword,
            occupation
        });

        return res.status(201).json({
            message: "User created successfully"
        });
    } catch (error) {
        console.log("Something went wrong:", error.message);
        res.status(500).json({
            message: "Internal server Error"
        })
    }
}