const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dns = require("dns");

dns.setServers([
    "8.8.8.8",
    "1.1.1.1"
]);

require("dotenv").config();


const adminRoutes = require("./routes/adminRoutes");
const authRoutes = require("./routes/authRoutes");
const evaluationRoutes = require("./routes/evaluationRoutes");
const app = express();


const PORT = process.env.PORT || 5000;


/*
=========================================================
MIDDLEWARE
=========================================================
*/

app.use(cors());

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })
);


/*
=========================================================
RUTAS
=========================================================
*/


// Login administrador
app.use(
    "/api/auth",
    authRoutes
);


// Rutas protegidas administrador
app.use(
    "/api/admin",
    adminRoutes
);

// Evaluaciones públicas
app.use(
    "/api/evaluaciones",
    evaluationRoutes
);

// Ruta prueba API
app.get(
    "/",
    (req, res) => {

        res.json({
            message:
                "API SSM funcionando correctamente."
        });

    }
);



/*
=========================================================
DATABASE
=========================================================
*/

const connectDatabase = async () => {

    try {

        await mongoose.connect(
            process.env.MONGO_URI
        );


        console.log(
            "MongoDB conectado correctamente."
        );


    } catch(error) {

        console.error(
            "Error conectando MongoDB:"
        );


        console.error(
            error.message
        );


        process.exit(1);

    }

};


connectDatabase();



/*
=========================================================
SERVER
=========================================================
*/

app.listen(
    PORT,
    () => {

        console.log(
            `Servidor iniciado en puerto ${PORT}`
        );

    }
);



