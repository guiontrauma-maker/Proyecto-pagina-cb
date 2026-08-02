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
// TODAS LAS RUTAS DE ADMIN REQUIEREN AUTENTICACIÓN
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


// CASOS PAPELERA
router.get(
    "/casos/papelera",
    getCasosPapelera
);


// CASOS ACTIVOS
router.get(
    "/casos",
    getCasos
);


router.put(
    "/casos/:id",
    updateCaseStatus
);


router.delete(
    "/casos/:id",
    deleteCase
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