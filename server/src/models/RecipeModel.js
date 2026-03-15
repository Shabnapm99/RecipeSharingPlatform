import mongoose, { Schema } from "mongoose";

const recipeSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        index:true

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
            required: true,
            trim: true
        }
    ],
    instructions: [{
        type: String,
        required: true,
        trim: true
    }],
    image: {
        type: String,
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index:true
    },
    cookingTime: {
        type: Number,
        default: 5,
        min: 5,
        max: 60,
        index:true
    },
    cuisine: {
        type: String,
        // enum: ["Indian", "Italian", "Chinese", "Mexican", "American", "Mediterranean", "Pakistani"],
        required: true,
        default: "Indian"
    },
    difficulty: {
        type: String,
        enum: ["easy", "medium", "hard"],
        default: "easy",
        required: true,
        lowercase: true
    },
    dietType: {
        type: String,
        enum: ["vegetarian", "non-vegetarian"],
        default: "vegetarian",
        required: true,
        lowercase: true

    },
    rating: {
        type: Number,
        default: 0,
        index:true
    },

    reviews: [
        {
            name: String,
            rating: Number,
            comment: String,
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ]

}, { timestamps: true })

export default mongoose.model('Recipe', recipeSchema)