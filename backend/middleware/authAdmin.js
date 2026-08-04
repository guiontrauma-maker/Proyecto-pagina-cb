const jwt = require("jsonwebtoken");


function authAdmin(req, res, next) {

    try {

        const authorization =
            req.headers.authorization;


        if (
            !authorization ||
            !authorization.startsWith("Bearer ")
        ) {

            return res.status(401).json({
                message:
                    "No autorizado",
            });

        }


        const token =
            authorization.split(" ")[1];


        const decoded =
            jwt.verify(
                token,
                process.env.JWT_SECRET
            );


        if (
            decoded.role !== "admin"
        ) {

            return res.status(403).json({
                message:
                    "Acceso restringido",
            });

        }


        req.admin = decoded;


        next();


    } catch(error) {

        console.error(
            "ERROR JWT:",
            error.message
        );


        return res.status(401).json({
            message:
                "Sesión inválida o expirada",
        });

    }

}


module.exports = authAdmin;



