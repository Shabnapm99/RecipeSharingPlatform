import jwt from 'jsonwebtoken';

export const authAdmin = (req, res, next) => {
    try {
        const token = req.cookies.adminToken;//access token from cookies
        if (!token) {
            return res.status(401).json({ message: "Token not available" });
        }
        let decoded = jwt.verify(token, process.env.JWT_TOKEN);//if we pass the token and and secret key we set while creating token to the verify method,it will return the unique id we sent while creating token
        if (!decoded) {
            return res.status(401).json({ message: "Admin not authenticated" });
        }

        if (decoded.role !== "admin") {
            return res.status(401).json({ message: "Access denied" });//role based accecc

        }
        req.admin = decoded._id;
        next();//Middleware must call next() to pass control to the next route.


    } catch (error) {
        res.status(404).json({ message: "Page not found" });

    }
}