const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    try {

        const authHeader =
            req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                message: "No autorizado."
            });
        }

        const parts =
            authHeader.split(" ");

        if (
            parts.length !== 2 ||
            parts[0] !== "Bearer"
        ) {
            return res.status(401).json({
                message: "Token inválido."
            });
        }

        const token = parts[1];

        const decoded =
            jwt.verify(
                token,
                process.env.JWT_SECRET
            );

        req.admin = decoded;

        next();

    } catch (error) {

        return res.status(401).json({
            message: "Sesión inválida o expirada."
        });

    }
};

module.exports = authMiddleware;



