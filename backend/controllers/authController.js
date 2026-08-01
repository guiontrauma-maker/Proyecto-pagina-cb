const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Admin = require("../models/Admin");


const loginAdmin = async (req, res) => {

    try {

        const {
            email,
            password
        } = req.body;


        const admin = await Admin.findOne({
            email
        });


        if (!admin) {

            return res.status(401).json({
                message:
                    "Credenciales incorrectas."
            });

        }


        const passwordValid =
            await bcrypt.compare(
                password,
                admin.password
            );


        if (!passwordValid) {

            return res.status(401).json({
                message:
                    "Credenciales incorrectas."
            });

        }


        const token =
            jwt.sign(
                {
                    id: admin._id,
                    email: admin.email,
                    role: admin.role
                },
                process.env.JWT_SECRET,
                {
                    expiresIn:
                        "8h"
                }
            );


        res.status(200).json({

            message:
                "Login correcto.",

            token,

            admin: {

                id:
                    admin._id,

                name:
                    admin.name,

                email:
                    admin.email,

                role:
                    admin.role

            }

        });


    } catch(error) {

        console.error(
            "Error login admin:",
            error.message
        );


        res.status(500).json({
            message:
                "Error iniciando sesión."
        });

    }

};


module.exports = {
    loginAdmin
};