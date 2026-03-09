
import mongoose, { Schema } from "mongoose";

const favoriteSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
    recipes: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Recipe',
            required: true
        }
    ]//favorites will be an array of rfecipes
}, { timestamps: true })

export default mongoose.model('Favorite', favoriteSchema);