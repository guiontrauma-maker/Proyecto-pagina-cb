const express = require("express");

const {
    createEvaluation
} = require("../controllers/evaluationController");


const router = express.Router();


// Crear nueva evaluación
router.post(
    "/",
    createEvaluation
);


module.exports = router;



