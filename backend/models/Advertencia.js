const mongoose = require("mongoose");

const advertenciaSchema = new mongoose.Schema(
    {
        brokerName: {
            type: String,
            required: true,
            trim: true,
        },

        website: {
            type: String,
            default: "",
        },

        country: {
            type: String,
            default: "",
        },

        reason: {
            type: String,
            required: true,
        },

        reportDate: {
            type: Date,
            default: Date.now,
        },

        status: {
            type: String,
            enum: [
                "Activo",
                "En revisión",
                "Retirado",
            ],
            default: "Activo",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model(
    "Advertencia",
    advertenciaSchema
);



