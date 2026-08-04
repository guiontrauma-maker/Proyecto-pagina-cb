const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

require("dotenv").config();
const dns = require("dns");

dns.setServers([
    "8.8.8.8",
    "1.1.1.1"
]);

const Admin = require("../models/Admin");


const updatePassword = async () => {

    try {

        console.log("Conectando con MongoDB...");

        await mongoose.connect(
            process.env.MONGO_URI
        );

        console.log("MongoDB conectado.");


        const passwordHash = await bcrypt.hash(
            process.env.ADMIN_PASSWORD,
            10
        );


        const admin = await Admin.findOneAndUpdate(
            {
                email: process.env.ADMIN_EMAIL
            },
            {
                password: passwordHash
            },
            {
                new: true
            }
        );


        if (!admin) {

            console.log(
                "Administrador no encontrado."
            );

        } else {

            console.log(
                "Contraseña actualizada correctamente."
            );

            console.log(
                "Usuario:",
                admin.email
            );

        }


        await mongoose.connection.close();

    } catch(error) {

        console.log(
            error.message
        );

        process.exit(1);

    }

};


updatePassword();



