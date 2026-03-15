import RecipeModel from "../models/RecipeModel.js"


// post reviews

export const addReview = async (req, res) => {

    try {

        //if user is adding a review

        const recipe = await RecipeModel.findById(req.params.id)//since all logged in users can add reviews and update recipe
        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" })
        };
        const newReview = {
            rating: Number(req.body.rating),
            name: req.user.name,
            comment: req.body.comment
        }
        recipe.reviews.push(newReview);

        //calculate rating
        const totalRatingSum = recipe.reviews.reduce((acc, item) => item.rating + acc, 0);
        recipe.rating = totalRatingSum / recipe.reviews.length;
        await recipe.save();//save changes in document

        return res.status(200).json({
            message: "Review added successfully",
            recipe
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error"
        });
    }

}

