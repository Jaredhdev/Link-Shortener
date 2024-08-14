const jwt = require("jsonwebtoken");

exports.verifyToken = async (req, res, next) => {
    try {
        // Auth header should be: Bearer <jwt token>
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        req.user = decoded;

        next();

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Error Validating Token" })
    }

}