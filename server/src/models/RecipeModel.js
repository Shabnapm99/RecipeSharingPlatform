import mongoose, { Schema } from "mongoose";

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,

    },
    description: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 500

    },
    ingredients: [
        {
            type: String,
            required: true
        }
    ],
    instructions: [{
        type: String,
        required: true
    }],
    image: {
        type: String,

    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    cookingTime: {
        type: Number,
        default: 5,
        min: 5,
        max: 60
    },
    cuisine: {
        type: String,
        enum: ["Indian", "Italian", "Chinese", "Mexican", "American", "Mediterranean"],
        required: true,
        default: "Indian"
    },
    difficulty: {
        type: String,
        enum: ["EASY", "MEDIUM", "HARD"],
        default: "EASY",
        required: true,
    },
    dietType: {
        type: String,
        enum: ["VEGETARIAN", "NON-VEGETARIAN"],
        default: "VEGETARIAN",
        required: true
    },
    rating: {
        type: Number,
        default: 0,
        min: 0, max: 5
    },
    reviewCount: {
        type: Number,
        default: 0,

    }

}, { timestamps: true })

export default mongoose.model('Recipe', recipeSchema)