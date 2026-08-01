const dns = require("dns");

dns.setServers([
    "8.8.8.8",
    "1.1.1.1"
]);


require("dotenv").config();


const mongoose = require("mongoose");


const testMongo = async () => {

    try {

        console.log("--------------------------------");
        console.log("Probando conexión MongoDB...");
        console.log("--------------------------------");


        await mongoose.connect(
            process.env.MONGO_URI
        );


        console.log(
            "MongoDB conectado correctamente."
        );


        console.log(
            "Base de datos:",
            mongoose.connection.name
        );


        console.log(
            "Servidor:",
            mongoose.connection.host
        );


        await mongoose.disconnect();


        console.log(
            "Conexión cerrada."
        );


    } catch (error) {


        console.log(
            "Error conectando MongoDB:"
        );


        console.log(
            error.message
        );


        process.exit(1);

    }

};


testMongo();