const express = require("express");

const authMiddleware = require("../middleware/authMiddleware");

const {
getDashboard,
getEvaluaciones,
updateEvaluationStatus,
convertEvaluationToCase,
getCasos,
updateCaseStatus,
getAdvertencias,
getMensajes,
markMessageRead,
deleteMessage
} = require("../controllers/adminController");

const router = express.Router();

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

// =========================================================
// CASOS
// =========================================================

router.get(
"/casos",
getCasos
);

router.put(
"/casos/:id",
updateCaseStatus
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
