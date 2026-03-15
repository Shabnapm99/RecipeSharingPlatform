import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLenth: 50,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index:true,
        trim: true,
        lowercase: true //It automatically converts the value to lowercase before saving to the database.
    },
    password_hash: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: true,
        minLength: 3,
        trim: true
    },
    //To store favorite recipes (reference to recipe model to store only the recipe IDs)
    // favoriteRecipes: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'Recipe'
    //     }
    // ],
    addedRecipes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Recipe'
        }
    ]

}, { timestamps: true })

export default mongoose.model('User', userSchema)