const Evaluacion = require("../models/Evaluacion");
const Caso = require("../models/Caso");
const Advertencia = require("../models/Advertencia");
const Mensaje = require("../models/Mensaje");

// =========================================================
// DASHBOARD
// =========================================================

const getDashboard = async (req, res) => {
    try {
        const totalEvaluaciones =
            await Evaluacion.countDocuments();

        const evaluacionesPendientes =
            await Evaluacion.countDocuments({
                status: "Pendiente"
            });

        const totalCasos =
            await Caso.countDocuments();

        const casosProceso =
            await Caso.countDocuments({
                status: "En proceso"
            });

        const casosFinalizados =
            await Caso.countDocuments({
                status: "Finalizado"
            });

        const totalAdvertencias =
            await Advertencia.countDocuments();

        const mensajesNoLeidos =
            await Mensaje.countDocuments({
                read: false
            });

        const evaluacionesRecientes =
            await Evaluacion.find()
                .sort({
                    createdAt: -1
                })
                .limit(5);

        res.status(200).json({
            statistics: {
                totalEvaluaciones,
                evaluacionesPendientes,
                totalCasos,
                casosProceso,
                casosFinalizados,
                totalAdvertencias,
                mensajesNoLeidos
            },
            evaluacionesRecientes
        });

    } catch (error) {
        console.error(
            "Error obteniendo dashboard:",
            error.message
        );

        res.status(500).json({
            message:
                "Error obteniendo información del dashboard."
        });
    }
};


// =========================================================
// EVALUACIONES
// =========================================================

const getEvaluaciones = async (req, res) => {
    try {
        const evaluaciones =
            await Evaluacion.find()
                .sort({
                    createdAt: -1
                });

        res.status(200).json(evaluaciones);

    } catch (error) {
        console.error(
            "Error obteniendo evaluaciones:",
            error.message
        );

        res.status(500).json({
            message:
                "Error obteniendo las evaluaciones."
        });
    }
};


// =========================================================
// ACTUALIZAR ESTADO DE EVALUACIÓN
// =========================================================

const updateEvaluationStatus = async (req, res) => {
    try {
        const { status } = req.body;

        const evaluation =
            await Evaluacion.findByIdAndUpdate(
                req.params.id,
                {
                    status
                },
                {
                    new: true,
                    runValidators: true
                }
            );

        if (!evaluation) {
            return res.status(404).json({
                message:
                    "Evaluación no encontrada."
            });
        }

        res.status(200).json(evaluation);

    } catch (error) {
        console.error(
            "Error actualizando evaluación:",
            error.message
        );

        res.status(500).json({
            message:
                "Error actualizando la evaluación."
        });
    }
};


// =========================================================
// CONVERTIR EVALUACIÓN EN CASO
// =========================================================

const convertEvaluationToCase = async (req, res) => {
    try {
        const evaluation =
            await Evaluacion.findById(
                req.params.id
            );

        if (!evaluation) {
            return res.status(404).json({
                message:
                    "Evaluación no encontrada."
            });
        }

        const existingCase =
            await Caso.findOne({
                evaluationId: evaluation._id
            });

        if (existingCase) {
            return res.status(400).json({
                message:
                    "Esta evaluación ya fue convertida en caso.",
                caseNumber:
                    existingCase.caseNumber
            });
        }

        const lastCase =
    await Caso.findOne()
        .sort({
            createdAt: -1
        });


let nextNumber = 1;


if (lastCase && lastCase.caseNumber) {

    const number =
        parseInt(
            lastCase.caseNumber.replace(
                "SSM-",
                ""
            )
        );

    nextNumber = number + 1;

}


const caseNumber =
    `SSM-${String(
        nextNumber
    ).padStart(5, "0")}`;
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
            evaluation.description || "",

        origin:
            evaluation.origin || "Panel Administrador",

        formSource:
            evaluation.formSource || "Evaluación",

        status:
            "En revisión"
    });
        evaluation.status = "Aprobada";

        await evaluation.save();

        res.status(201).json({
            message:
                "Caso creado correctamente.",

            caseNumber:
                newCase.caseNumber,

            caso:
                newCase
        });

    } catch (error) {
        console.error(
            "Error convirtiendo evaluación:",
            error.message
        );

        res.status(500).json({
            message:
                "Error convirtiendo la evaluación en caso."
        });
    }
};

// =========================================================
// CASOS
// =========================================================

const getCasos = async (req, res) => {
    try {

        const casos =
            await Caso.find({
                deleted: false
            })
            .sort({
                createdAt: -1
            });

        res.status(200).json(casos);

    } catch (error) {

        console.error(
            "Error obteniendo casos:",
            error.message
        );

        res.status(500).json({
            message:
                "Error obteniendo los casos."
        });

    }
};


// =========================================================
// CASOS EN PAPELERA
// =========================================================

const getCasosPapelera = async (req, res) => {
    try {

        const casos =
            await Caso.find({
                deleted: true
            })
            .sort({
                createdAt: -1
            });


        res.status(200).json(casos);


    } catch (error) {

        console.error(
            "Error obteniendo casos en papelera:",
            error.message
        );


        res.status(500).json({
            message:
                "Error obteniendo casos en papelera."
        });

    }
};
// =========================================================
// ACTUALIZAR ESTADO DE CASO
// =========================================================

const updateCaseStatus = async (req, res) => {
    try {
        const { status } = req.body;

        const caso =
            await Caso.findByIdAndUpdate(
                req.params.id,
                {
                    status,
                    lastUpdate: new Date()
                },
                {
                    new: true,
                    runValidators: true
                }
            );

        if (!caso) {
            return res.status(404).json({
                message:
                    "Caso no encontrado."
            });
        }

        res.status(200).json(caso);

    } catch (error) {
        console.error(
            "Error actualizando caso:",
            error.message
        );

        res.status(500).json({
            message:
                "Error actualizando el caso."
        });
    }
};

// =========================================================
// ENVIAR CASO A PAPELERA
// =========================================================

const deleteCase = async (req, res) => {
    try {

        const caso =
            await Caso.findByIdAndUpdate(
                req.params.id,
                {
    deleted: true,
    deletedAt: new Date(),
    lastUpdate: new Date()
},
                {
                    new: true
                }
            );


        if (!caso) {

            return res.status(404).json({
                message:
                    "Caso no encontrado."
            });

        }


        res.status(200).json({

            message:
                "Caso enviado a papelera correctamente.",

            caso

        });


    } catch (error) {

        console.error(
            "Error enviando caso a papelera:",
            error.message
        );


        res.status(500).json({

            message:
                "Error enviando caso a papelera."

        });

    }
};
// =========================================================
// RESTAURAR CASO DESDE PAPELERA
// =========================================================

const restoreCase = async (req, res) => {
    try {

        const caso =
            await Caso.findByIdAndUpdate(
                req.params.id,
                {
                    deleted: false,
                    deletedAt: null,
                    lastUpdate: new Date()
                },
                {
                    new: true
                }
            );


        if (!caso) {

            return res.status(404).json({
                message:
                    "Caso no encontrado."
            });

        }


        res.status(200).json({

            message:
                "Caso restaurado correctamente.",

            caso

        });


    } catch (error) {

        console.error(
            "Error restaurando caso:",
            error.message
        );


        res.status(500).json({

            message:
                "Error restaurando caso."

        });

    }
};


// =========================================================
// ELIMINAR CASO DEFINITIVAMENTE
// =========================================================

const deleteCasePermanent = async (req, res) => {
    try {

        const caso =
            await Caso.findByIdAndDelete(
                req.params.id
            );


        if (!caso) {

            return res.status(404).json({
                message:
                    "Caso no encontrado."
            });

        }


        res.status(200).json({

            message:
                "Caso eliminado definitivamente."

        });


    } catch (error) {

        console.error(
            "Error eliminando caso definitivamente:",
            error.message
        );


        res.status(500).json({

            message:
                "Error eliminando caso definitivamente."

        });

    }
};
// =========================================================
// ADVERTENCIAS
// =========================================================

const getAdvertencias = async (req, res) => {
    try {
        const advertencias =
            await Advertencia.find()
                .sort({
                    reportDate: -1
                });

        res.status(200).json(advertencias);

    } catch (error) {
        console.error(
            "Error obteniendo advertencias:",
            error.message
        );

        res.status(500).json({
            message:
                "Error obteniendo las advertencias."
        });
    }
};


// =========================================================
// MENSAJES
// =========================================================

const getMensajes = async (req, res) => {
    try {
        const mensajes =
            await Mensaje.find()
                .sort({
                    createdAt: -1
                });

        res.status(200).json(mensajes);

    } catch (error) {
        console.error(
            "Error obteniendo mensajes:",
            error.message
        );

        res.status(500).json({
            message:
                "Error obteniendo los mensajes."
        });
    }
};


// =========================================================
// MARCAR MENSAJE COMO LEÍDO
// =========================================================

const markMessageRead = async (req, res) => {
    try {
        const mensaje =
            await Mensaje.findByIdAndUpdate(
                req.params.id,
                {
                    read: true
                },
                {
                    new: true
                }
            );

        if (!mensaje) {
            return res.status(404).json({
                message:
                    "Mensaje no encontrado."
            });
        }

        res.status(200).json(mensaje);

    } catch (error) {
        console.error(
            "Error marcando mensaje:",
            error.message
        );

        res.status(500).json({
            message:
                "Error actualizando el mensaje."
        });
    }
};


// =========================================================
// ELIMINAR MENSAJE
// =========================================================

const deleteMessage = async (req, res) => {
    try {
        const mensaje =
            await Mensaje.findByIdAndDelete(
                req.params.id
            );

        if (!mensaje) {
            return res.status(404).json({
                message:
                    "Mensaje no encontrado."
            });
        }

        res.status(200).json({
            message:
                "Mensaje eliminado correctamente."
        });

    } catch (error) {
        console.error(
            "Error eliminando mensaje:",
            error.message
        );

        res.status(500).json({
            message:
                "Error eliminando el mensaje."
        });
    }
};


// =========================================================
// EXPORTACIONES
// =========================================================

module.exports = {
    getDashboard,
    getEvaluaciones,
    updateEvaluationStatus,
    convertEvaluationToCase,

    getCasos,
    updateCaseStatus,
    deleteCase,
    getCasosPapelera,
    restoreCase,
    deleteCasePermanent,

    getAdvertencias,

    getMensajes,
    markMessageRead,
    deleteMessage
};