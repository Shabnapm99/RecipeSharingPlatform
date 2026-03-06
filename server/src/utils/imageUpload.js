import cloudinary from "../config/cloudinary.js";

const uploadToCloudinary = (filePath) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(
            filePath,
            {
                folder: 'recipes'
            },
            (error, result) => {
                if (error) { return reject(error) }
                resolve(result.secure_url)
            }
        )
    })
}

export default uploadToCloudinary