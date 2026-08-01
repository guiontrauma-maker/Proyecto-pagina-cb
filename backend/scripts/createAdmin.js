const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dns = require("dns");

require("dotenv").config();

dns.setServers([
    "8.8.8.8",
    "1.1.1.1"
]);


const Admin = require("../models/Admin");


const createAdmin = async () => {

    try {

        console.log("--------------------------------");
        console.log("Conectando con MongoDB...");
        console.log("--------------------------------");


        await mongoose.connect(
            process.env.MONGO_URI
        );


        console.log(
            "MongoDB conectado correctamente."
        );


        const exists = await Admin.findOne({
            email: process.env.ADMIN_EMAIL
        });


        if (exists) {

            console.log(
                "El administrador ya existe."
            );

            await mongoose.connection.close();
            process.exit(0);

        }


        const passwordHash = await bcrypt.hash(
            process.env.ADMIN_PASSWORD,
            10
        );


        const admin = await Admin.create({

            name:
                process.env.ADMIN_NAME,

            email:
                process.env.ADMIN_EMAIL,

            password:
                passwordHash,

            role:
                "admin"

        });


        console.log("--------------------------------");
        console.log(
            "Administrador creado correctamente."
        );
        console.log(
            "Email:",
            admin.email
        );
        console.log("--------------------------------");


        await mongoose.connection.close();

        process.exit(0);


    } catch(error) {

        console.log("--------------------------------");
        console.log("ERROR CREANDO ADMIN:");
        console.log("--------------------------------");

        console.log(
            error.message
        );


        await mongoose.connection.close();

        process.exit(1);

    }

};


createAdmin();