const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const Admin = require("./models/Admin");
const Evaluacion = require("./models/Evaluacion");
const Caso = require("./models/Caso");
const Advertencia = require("./models/Advertencia");
const Mensaje = require("./models/Mensaje");

const authAdmin = require("./middleware/authAdmin");

const app = express();

const PORT = process.env.PORT || 5000;
const adminRoutes = require("./routes/adminRoutes");


/* =========================================================
   MIDDLEWARE
========================================================= */

app.use(cors());

app.use(express.json());
app.use("/api/admin", adminRoutes);

app.use(express.urlencoded({
    extended: true,
}));


/* =========================================================
   DATABASE
========================================================= */

const connectDatabase = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_URI
        );

        console.log(
            "Conexión a MongoDB establecida."
        );

        await createAdmin();

    } catch (error) {
        console.error(
            "Error al conectar con MongoDB:"
        );

        console.error(error.message);
    }
};


/* =========================================================
   CREAR ADMINISTRADOR
========================================================= */

const createAdmin = async () => {
    try {
        const existingAdmin =
            await Admin.findOne({
                email:
                    process.env.ADMIN_EMAIL,
            });

        if (existingAdmin) {
            console.log(
                "Administrador existente."
            );

            return;
        }

        const hashedPassword =
            await bcrypt.hash(
                process.env.ADMIN_PASSWORD,
                10
            );

        await Admin.create({
            name:
                process.env.ADMIN_NAME,

            email:
                process.env.ADMIN_EMAIL,

            password:
                hashedPassword,

            role: "admin",
        });

        console.log(
            "Administrador creado correctamente."
        );

    } catch (error) {
        console.error(
            "Error creando administrador:"
        );

        console.error(error.message);
    }
};


connectDatabase();


/* =========================================================
   API GENERAL
========================================================= */

app.get("/", (req, res) => {
    res.status(200).json({
        message: "API SSM operativa.",
    });
});


/* =========================================================
   LOGIN ADMINISTRADOR
========================================================= */

app.post(
    "/api/admin/login",
    async (req, res) => {

        try {

            const {
                email,
                password,
            } = req.body;

            if (!email || !password) {

                return res.status(400).json({
                    message:
                        "Correo y contraseña son obligatorios.",
                });

            }


            const admin =
                await Admin.findOne({
                    email:
                        email.toLowerCase(),
                });


            if (!admin) {

                return res.status(401).json({
                    message:
                        "Credenciales incorrectas.",
                });

            }


            const passwordCorrect =
                await bcrypt.compare(
                    password,
                    admin.password
                );


            if (!passwordCorrect) {

                return res.status(401).json({
                    message:
                        "Credenciales incorrectas.",
                });

            }


            const token =
                jwt.sign(
                    {
                        id: admin._id,
                        name: admin.name,
                        email: admin.email,
                        role: admin.role,
                    },

                    process.env.JWT_SECRET,

                    {
                        expiresIn: "8h",
                    }
                );


            res.json({
                message:
                    "Inicio de sesión correcto.",

                token,

                admin: {
                    id: admin._id,
                    name: admin.name,
                    email: admin.email,
                    role: admin.role,
                },
            });


        } catch (error) {

            console.error(error);

            res.status(500).json({
                message:
                    "Error interno del servidor.",
            });

        }

    }
);


/* =========================================================
   ADMIN ACTUAL
========================================================= */

app.get(
    "/api/admin/me",
    authAdmin,
    async (req, res) => {

        try {

            const admin =
                await Admin.findById(
                    req.admin.id
                ).select("-password");


            if (!admin) {

                return res.status(404).json({
                    message:
                        "Administrador no encontrado.",
                });

            }


            res.json(admin);

        } catch (error) {

            res.status(500).json({
                message:
                    "Error obteniendo administrador.",
            });

        }

    }
);


/* =========================================================
   DASHBOARD
========================================================= */

app.get(
    "/api/admin/dashboard",
    authAdmin,
    async (req, res) => {

        try {

            const [
                totalEvaluaciones,
                evaluacionesPendientes,
                evaluacionesRevision,
                totalCasos,
                casosProceso,
                casosFinalizados,
                totalAdvertencias,
                totalMensajes,
                mensajesNoLeidos,
            ] = await Promise.all([

                Evaluacion.countDocuments(),

                Evaluacion.countDocuments({
                    status: "Pendiente",
                }),

                Evaluacion.countDocuments({
                    status: "En revisión",
                }),

                Caso.countDocuments(),

                Caso.countDocuments({
                    status: "En proceso",
                }),

                Caso.countDocuments({
                    status: "Finalizado",
                }),

                Advertencia.countDocuments(),

                Mensaje.countDocuments(),

                Mensaje.countDocuments({
                    read: false,
                }),

            ]);


            const evaluacionesRecientes =
                await Evaluacion.find()
                    .sort({
                        createdAt: -1,
                    })
                    .limit(10);


            res.json({

                statistics: {

                    totalEvaluaciones,

                    evaluacionesPendientes,

                    evaluacionesRevision,

                    totalCasos,

                    casosProceso,

                    casosFinalizados,

                    totalAdvertencias,

                    totalMensajes,

                    mensajesNoLeidos,

                },

                evaluacionesRecientes,

            });


        } catch (error) {

            console.error(error);

            res.status(500).json({
                message:
                    "Error cargando dashboard.",
            });

        }

    }
);


/* =========================================================
   EVALUACIONES
========================================================= */


/*
   Crear evaluación desde la página pública
*/

app.post(
    "/api/evaluaciones",
    async (req, res) => {

        try {

            const {
                fullName,
                email,
                phone,
                fraudType,
                amount,
                currency,
                description,
            } = req.body;


            if (
                !fullName ||
                !email
            ) {

                return res.status(400).json({
                    message:
                        "Nombre y correo son obligatorios.",
                });

            }


            const evaluation =
                await Evaluacion.create({

                    fullName,

                    email,

                    phone,

                    fraudType:
                        fraudType ||
                        "Evaluación general",

                    amount:
                        Number(amount) || 0,

                    currency:
                        currency || "USD",

                    description,

                });


            res.status(201).json({

                message:
                    "Solicitud enviada correctamente.",

                id:
                    evaluation._id,

            });


        } catch (error) {

            console.error(error);

            res.status(500).json({
                message:
                    "Error guardando evaluación.",
            });

        }

    }
);


/*
   Obtener todas las evaluaciones
*/

app.get(
    "/api/admin/evaluaciones",
    authAdmin,
    async (req, res) => {

        try {

            const evaluations =
                await Evaluacion.find()
                    .sort({
                        createdAt: -1,
                    });


            res.json(evaluations);

        } catch (error) {

            res.status(500).json({
                message:
                    "Error obteniendo evaluaciones.",
            });

        }

    }
);


/*
   Cambiar estado de evaluación
*/

app.put(
    "/api/admin/evaluaciones/:id",
    authAdmin,
    async (req, res) => {

        try {

            const evaluation =
                await Evaluacion.findByIdAndUpdate(

                    req.params.id,

                    {
                        status:
                            req.body.status,
                    },

                    {
                        new: true,
                        runValidators: true,
                    }

                );


            if (!evaluation) {

                return res.status(404).json({
                    message:
                        "Evaluación no encontrada.",
                });

            }


            res.json(evaluation);

        } catch (error) {

            res.status(500).json({
                message:
                    "Error actualizando evaluación.",
            });

        }

    }
);


/*
   Convertir evaluación en caso
*/

app.post(
    "/api/admin/evaluaciones/:id/convertir",
    authAdmin,
    async (req, res) => {

        try {

            const evaluation =
                await Evaluacion.findById(
                    req.params.id
                );


            if (!evaluation) {

                return res.status(404).json({
                    message:
                        "Evaluación no encontrada.",
                });

            }


            const existingCase =
                await Caso.findOne({
                    evaluationId:
                        evaluation._id,
                });


            if (existingCase) {

                return res.status(400).json({
                    message:
                        "Esta evaluación ya tiene un caso.",
                });

            }


            const totalCases =
                await Caso.countDocuments();


            const caseNumber =
                `SSM-${String(
                    totalCases + 1
                ).padStart(6, "0")}`;


            const newCase =
                await Caso.create({

                    caseNumber,

                    evaluationId:
                        evaluation._id,

                    fullName:
                        evaluation.fullName,

                    email:
                        evaluation.email,

                    phone:
                        evaluation.phone,

                    fraudType:
                        evaluation.fraudType,

                    amount:
                        evaluation.amount,

                    currency:
                        evaluation.currency,

                    description:
                        evaluation.description,

                    status:
                        "En revisión",

                });


            evaluation.status =
                "Aprobada";

            await evaluation.save();


            res.status(201).json(
                newCase
            );


        } catch (error) {

            console.error(error);

            res.status(500).json({
                message:
                    "Error convirtiendo evaluación en caso.",
            });

        }

    }
);


/* =========================================================
   CASOS
========================================================= */

app.get(
    "/api/admin/casos",
    authAdmin,
    async (req, res) => {

        try {

            const cases =
                await Caso.find()
                    .sort({
                        createdAt: -1,
                    });


            res.json(cases);

        } catch (error) {

            res.status(500).json({
                message:
                    "Error obteniendo casos.",
            });

        }

    }
);


app.post(
    "/api/admin/casos",
    authAdmin,
    async (req, res) => {

        try {

            const totalCases =
                await Caso.countDocuments();


            const caseNumber =
                `SSM-${String(
                    totalCases + 1
                ).padStart(6, "0")}`;


            const newCase =
                await Caso.create({

                    caseNumber,

                    fullName:
                        req.body.fullName,

                    email:
                        req.body.email,

                    phone:
                        req.body.phone,

                    fraudType:
                        req.body.fraudType,

                    amount:
                        Number(
                            req.body.amount
                        ) || 0,

                    currency:
                        req.body.currency ||
                        "USD",

                    description:
                        req.body.description,

                    notes:
                        req.body.notes,

                    status:
                        req.body.status ||
                        "En revisión",

                });


            res.status(201).json(
                newCase
            );


        } catch (error) {

            console.error(error);

            res.status(500).json({
                message:
                    "Error creando caso.",
            });

        }

    }
);


app.put(
    "/api/admin/casos/:id",
    authAdmin,
    async (req, res) => {

        try {

            const updatedCase =
                await Caso.findByIdAndUpdate(

                    req.params.id,

                    {
                        ...req.body,

                        lastUpdate:
                            new Date(),
                    },

                    {
                        new: true,

                        runValidators: true,
                    }

                );


            if (!updatedCase) {

                return res.status(404).json({
                    message:
                        "Caso no encontrado.",
                });

            }


            res.json(updatedCase);


        } catch (error) {

            res.status(500).json({
                message:
                    "Error actualizando caso.",
            });

        }

    }
);


app.delete(
    "/api/admin/casos/:id",
    authAdmin,
    async (req, res) => {

        try {

            const deletedCase =
                await Caso.findByIdAndDelete(
                    req.params.id
                );


            if (!deletedCase) {

                return res.status(404).json({
                    message:
                        "Caso no encontrado.",
                });

            }


            res.json({
                message:
                    "Caso eliminado correctamente.",
            });


        } catch (error) {

            res.status(500).json({
                message:
                    "Error eliminando caso.",
            });

        }

    }
);


/* =========================================================
   ADVERTENCIAS / BROKERS
========================================================= */

app.get(
    "/api/admin/advertencias",
    authAdmin,
    async (req, res) => {

        try {

            const warnings =
                await Advertencia.find()
                    .sort({
                        reportDate: -1,
                    });


            res.json(warnings);

        } catch (error) {

            res.status(500).json({
                message:
                    "Error obteniendo advertencias.",
            });

        }

    }
);


app.post(
    "/api/admin/advertencias",
    authAdmin,
    async (req, res) => {

        try {

            const warning =
                await Advertencia.create(
                    req.body
                );


            res.status(201).json(
                warning
            );

        } catch (error) {

            res.status(500).json({
                message:
                    "Error creando advertencia.",
            });

        }

    }
);


app.put(
    "/api/admin/advertencias/:id",
    authAdmin,
    async (req, res) => {

        try {

            const warning =
                await Advertencia.findByIdAndUpdate(

                    req.params.id,

                    req.body,

                    {
                        new: true,

                        runValidators: true,
                    }

                );


            res.json(warning);

        } catch (error) {

            res.status(500).json({
                message:
                    "Error actualizando advertencia.",
            });

        }

    }
);


app.delete(
    "/api/admin/advertencias/:id",
    authAdmin,
    async (req, res) => {

        try {

            await Advertencia.findByIdAndDelete(
                req.params.id
            );


            res.json({
                message:
                    "Advertencia eliminada.",
            });

        } catch (error) {

            res.status(500).json({
                message:
                    "Error eliminando advertencia.",
            });

        }

    }
);


/* =========================================================
   MENSAJES
========================================================= */


/*
   Mensaje público
*/

app.post(
    "/api/contacto",
    async (req, res) => {

        try {

            const {
                name,
                email,
                subject,
                message,
            } = req.body;


            if (
                !name ||
                !email ||
                !message
            ) {

                return res.status(400).json({
                    message:
                        "Nombre, correo y mensaje son obligatorios.",
                });

            }


            const newMessage =
                await Mensaje.create({

                    name,

                    email,

                    subject,

                    message,

                });


            res.status(201).json({
                message:
                    "Mensaje enviado correctamente.",

                id:
                    newMessage._id,
            });


        } catch (error) {

            console.error(error);

            res.status(500).json({
                message:
                    "Error guardando mensaje.",
            });

        }

    }
);


/*
   Mensajes del administrador
*/

app.get(
    "/api/admin/mensajes",
    authAdmin,
    async (req, res) => {

        try {

            const messages =
                await Mensaje.find()
                    .sort({
                        createdAt: -1,
                    });


            res.json(messages);

        } catch (error) {

            res.status(500).json({
                message:
                    "Error obteniendo mensajes.",
            });

        }

    }
);


app.put(
    "/api/admin/mensajes/:id/leido",
    authAdmin,
    async (req, res) => {

        try {

            const message =
                await Mensaje.findByIdAndUpdate(

                    req.params.id,

                    {
                        read: true,
                    },

                    {
                        new: true,
                    }

                );


            res.json(message);

        } catch (error) {

            res.status(500).json({
                message:
                    "Error actualizando mensaje.",
            });

        }

    }
);


app.delete(
    "/api/admin/mensajes/:id",
    authAdmin,
    async (req, res) => {

        try {

            await Mensaje.findByIdAndDelete(
                req.params.id
            );


            res.json({
                message:
                    "Mensaje eliminado.",
            });

        } catch (error) {

            res.status(500).json({
                message:
                    "Error eliminando mensaje.",
            });

        }

    }
);


/* =========================================================
   SERVER
========================================================= */

app.listen(PORT, () => {

    console.log(
        `Servidor iniciado en el puerto ${PORT}`
    );

});