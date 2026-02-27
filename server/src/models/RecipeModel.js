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
        type: Schema.type.ObjectId,
        ref: 'User',
        required: true
    }

}, { timestamps: true })

export default mongoose.model('Recipe', recipeSchema)