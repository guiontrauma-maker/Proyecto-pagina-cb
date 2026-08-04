const mongoose = require("mongoose");

const evaluacionSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },

        phone: {
            type: String,
            default: "",
        },

        fraudType: {
    type: String,
    default: "Evaluación general",
},

origin: {
    type: String,
    default: "Página Inicio",
},

formSource: {
    type: String,
    default: "Evaluación",
},
        amount: {
            type: Number,
            default: 0,
        },

        currency: {
            type: String,
            default: "USD",
        },

        description: {
            type: String,
            default: "",
        },

        status: {
            type: String,
            enum: [
                "Pendiente",
                "En revisión",
                "Aprobada",
                "Rechazada",
            ],
            default: "Pendiente",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model(
    "Evaluacion",
    evaluacionSchema
);



