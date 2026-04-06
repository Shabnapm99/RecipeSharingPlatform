import adminModel from "../models/adminModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import UserModel from "../models/UserModel.js";

export const register = async (req, res) => {
    try {
        let { email, password } = req.body;
        email = email?.toLowerCase().trim();//converts the entered email(if exist) to lowercase since in db we are saving it in lowercase

        //validation 

        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        //check whether the admin already exist
        const isExisting = await adminModel.exists({ email: email });//since we only have to check whether the admin exist. no need to fecth it. exists increase the speed
        if (isExisting) {
            return res.status(400).json({ message: "email Already exist!!Continue to login" });
        }

        // Hashing the password

        let hashedPassword = await bcrypt.hash(password, 10);

        let newAdmin = await adminModel.create({
            email,
            password_hash: hashedPassword,
        });

        if (!newAdmin) {
            return res.status(400).json({ message: "admin is not created" })//to check whether admin is created properly in db or not
        }
        return res.status(201).json({
            message: "Admin created successfully"
        });
    } catch (error) {
        console.log("Something went wrong:", error.message);
        res.status(error.status || 500).json({
            message: "Internal server Error",
            error: error.message

        })
    }
}

export const login = async (req, res) => {
    try {

        let { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" })
        }
        email = email?.toLowerCase().trim();
        //check for the admin in the DB

        let admin = await adminModel.findOne({ email: email }).select('-__v');
        //if there is no admin registered on this email id
        if (!admin) {
            return res.status(400).json({ message: "Incorrect email or password" })
        }
        //compare the password with the hashed password 
        let isMatch = await bcrypt.compare(password, admin.password_hash);
        if (isMatch) {
            const token = jwt.sign({ _id: admin._id, role: "admin" }, process.env.JWT_TOKEN, { expiresIn: process.env.JWT_EXPIRESIN });

            res.cookie('adminToken', token, {
                httpOnly: true,
                // secure: process.env.NODE_ENV === "production",
                secure: true,      // Required for sameSite: 'none'
                sameSite: 'none',  // Crucial for cross-subdomain requests on Vercel
                partitioned: true,//ADD THIS for mobile/cross-site support
            });//create a cookie named adminToken with value token and other credentials

            return res.status(200).json({
                message: "LoggedIn successfully",
                admin: {
                    _id: admin._id,
                    email: admin.email

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

//logout 
export const logout = async (req, res) => {
    try {
        res.clearCookie('adminToken', {
            httpOnly: true,
            // secure: process.env.NODE_ENV === "production",
            secure: true,      // Required for sameSite: 'none'
            sameSite: 'none',  // Crucial for cross-subdomain requests on Vercel
            partitioned: true,//ADD THIS for mobile/cross-site support
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

export const getAllUsers = async (req, res) => {
    try {
        let users = await UserModel.find({}).select('-__v');
        res.status(200).json({ users });

    } catch (error) {
        console.log("Something went wrong:", error.message);
        res.status(error.status || 500).json({
            message: "Internal server Error",
            error: error.message

        })
    }
}

//update user

export const updateUserStatus = async (req, res) => {
    try {
        const userId = req.params.id;
        const { status } = req.body;
        const user = await UserModel.findByIdAndUpdate(
            userId,
            { status },
            { new: true }
        ).select('-password_hash -__v');

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({
            message: `User is ${status}`,
            user
        });



    } catch (error) {
        console.log("Something went wrong:", error.message);
        res.status(error.status || 500).json({
            message: "Internal server Error",
            error: error.message

        })
    }
}