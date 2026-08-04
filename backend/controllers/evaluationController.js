const Evaluacion = require("../models/Evaluacion");


// =========================================================
// CREAR EVALUACIÓN
// =========================================================

const createEvaluation = async (req, res) => {

    try {

        const {
            fullName,
            email,
            phone,
            fraudType,
            amount,
            currency,
            description
        } = req.body;


        const nuevaEvaluacion =
            await Evaluacion.create({

                fullName,

                email,

                phone,

                fraudType,

                amount,

                currency,

                description

            });


        res.status(201).json({

            message:
                "Evaluación enviada correctamente.",

            evaluation:
                nuevaEvaluacion

        });


    } catch (error) {

        console.error(
            "Error creando evaluación:",
            error.message
        );


        res.status(500).json({

            message:
                "Error guardando la evaluación."

        });

    }

};


module.exports = {
    createEvaluation
};



