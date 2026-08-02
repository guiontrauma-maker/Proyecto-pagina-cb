const mongoose = require("mongoose");

const casoSchema = new mongoose.Schema(
    {
        caseNumber: {
            type: String,
            required: true,
            unique: true,
        },

        evaluationId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Evaluacion",
            default: null,
        },

        fullName: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },

        phone: {
            type: String,
            default: "",
        },

        fraudType: {
            type: String,
            default: "",
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

        notes: {
            type: String,
            default: "",
        },

        status: {
            type: String,
            enum: [
                "En revisión",
                "En proceso",
                "Finalizado",
                "Rechazado",
            ],
            default: "En revisión",
        },

        deleted: {
    type: Boolean,
    default: false,
},

deletedAt: {
    type: Date,
    default: null,
},

origin: {
    type: String,
    default: "Página Inicio",
},

formSource: {
    type: String,
    default: "Evaluación",
},

        lastUpdate: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model(
    "Caso",
    casoSchema
);