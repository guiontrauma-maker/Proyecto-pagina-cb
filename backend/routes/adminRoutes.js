const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
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

} = require("../controllers/adminController");


// =========================================================
// TODAS LAS RUTAS ADMIN REQUIEREN TOKEN
// =========================================================

router.use(
    authMiddleware
);


// =========================================================
// DASHBOARD
// =========================================================

router.get(
    "/dashboard",
    getDashboard
);


// =========================================================
// EVALUACIONES
// =========================================================

router.get(
    "/evaluaciones",
    getEvaluaciones
);


router.put(
    "/evaluaciones/:id",
    updateEvaluationStatus
);


router.post(
    "/evaluaciones/:id/convertir",
    convertEvaluationToCase
);


// =========================================================
// CASOS
// =========================================================


// Obtener casos activos
router.get(
    "/casos",
    getCasos
);


// Obtener papelera
router.get(
    "/casos/papelera",
    getCasosPapelera
);


// Cambiar estado del caso
router.put(
    "/casos/:id",
    updateCaseStatus
);


// Mandar caso a papelera
router.delete(
    "/casos/:id",
    deleteCase
);


// Restaurar caso de papelera
router.put(
    "/casos/:id/restaurar",
    restoreCase
);


// Eliminar definitivamente
router.delete(
    "/casos/:id/eliminar-definitivo",
    deleteCasePermanent
);


// =========================================================
// ADVERTENCIAS
// =========================================================

router.get(
    "/advertencias",
    getAdvertencias
);


// =========================================================
// MENSAJES
// =========================================================

router.get(
    "/mensajes",
    getMensajes
);


router.put(
    "/mensajes/:id/leido",
    markMessageRead
);


router.delete(
    "/mensajes/:id",
    deleteMessage
);



module.exports = router;