
import { useState } from "react";

import {
    FaUser,
    FaEnvelope,
    FaDollarSign,
    FaLock,
    FaWhatsapp
} from "react-icons/fa";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import "../style/FormularioCaso.css";

function FormularioCaso({ origin = "Formulario general" }) {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [fraudType, setFraudType] = useState("");
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const whatsappMessage = [
            "SOLICITUD DE EVALUACIÓN GRATUITA - SSM",
            "",
            `Formulario: ${origin}`,
            `Nombre completo: ${fullName}`,
            `Correo electrónico: ${email}`,
            `Teléfono: ${phone || "No proporcionado"}`,
            `Tipo de fraude: ${fraudType}`,
            `Monto aproximado perdido: ${
                amount ? `$${amount} MXN` : "No proporcionado"
            }`,
            `Descripción del caso: ${
                description.trim() || "No proporcionada"
            }`
        ].join("\n");

        const whatsappUrl =
            `https://wa.me/525520870671?text=${encodeURIComponent(
                whatsappMessage
            )}`;

        window.location.href = whatsappUrl;
    };

    return (
        <section className="formulario-seccion">
            <form
                className="caso-form"
                onSubmit={handleSubmit}
            >
                <h2>CUÉNTANOS QUÉ PASÓ</h2>

                <p>
                    Solicite una revisión de caso sin costo hoy mismo.
                </p>

                <div className="input-group">
                    <FaUser />
                    <input
                        type="text"
                        placeholder="Nombre completo"
                        value={fullName}
                        onChange={(event) =>
                            setFullName(event.target.value)
                        }
                        required
                    />
                </div>

                <div className="input-group">
                    <FaEnvelope />
                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={email}
                        onChange={(event) =>
                            setEmail(event.target.value)
                        }
                        required
                    />
                </div>

                <div className="select-group">
                    <select
                        value={fraudType}
                        onChange={(event) =>
                            setFraudType(event.target.value)
                        }
                        required
                    >
                        <option value="">
                            Seleccione el tipo de fraude
                        </option>
                        <option value="Fraude bancario">
                            Fraude bancario
                        </option>
                        <option value="Fraude digital">
                            Fraude digital
                        </option>
                        <option value="Robo de identidad">
                            Robo de identidad
                        </option>
                        <option value="Estafa de inversión">
                            Estafa de inversión
                        </option>
                        <option value="Estafa romántica">
                            Estafa romántica
                        </option>
                        <option value="Estafa piramidal">
                            Estafa piramidal
                        </option>
                        <option value="Otro">Otro</option>
                    </select>
                </div>

                <div className="caso-phone-row">
                    <PhoneInput
                        defaultCountry="mx"
                        value={phone}
                        onChange={setPhone}
                    />
                </div>

                <div className="input-group">
                    <FaDollarSign />
                    <input
                        type="number"
                        placeholder="Monto aproximado perdido"
                        value={amount}
                        onChange={(event) =>
                            setAmount(event.target.value)
                        }
                        min="0"
                    />
                </div>

                <div className="comments-box">
                    <textarea
                        placeholder="Describa brevemente su caso"
                        value={description}
                        onChange={(event) =>
                            setDescription(event.target.value)
                        }
                    />
                </div>

                <button type="submit">
                    <FaWhatsapp />
                    Solicitar Evaluación Gratuita
                </button>

                <small className="secure">
                    <FaLock />
                    Tus datos se preparan para enviarse por WhatsApp.
                </small>
            </form>
        </section>
    );
}

export default FormularioCaso;
