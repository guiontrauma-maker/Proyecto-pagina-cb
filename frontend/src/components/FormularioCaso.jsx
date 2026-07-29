
import { useState } from "react";

import {
    FaUser,
    FaEnvelope,
    FaDollarSign,
    FaLock
} from "react-icons/fa";

import { PhoneInput } from "react-international-phone";

import "react-international-phone/style.css";

import "../style/FormularioCaso.css";


function FormularioCaso() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");


    const handleSubmit = async (event) => {

        event.preventDefault();

        setMessage("");
        setError("");
        setLoading(true);


        try {

            const response = await fetch(
                "http://localhost:5000/api/evaluaciones",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({

                        fullName,

                        email,

                        phone,

                        fraudType:
                            "Evaluación general",

                        amount:
                            Number(amount) || 0,

                        currency:
                            "USD",

                        description,

                    }),
                }
            );


            const data =
                await response.json();


            if (!response.ok) {

                throw new Error(
                    data.message ||
                    "No fue posible enviar la solicitud."
                );

            }


            setMessage(
                "Su solicitud fue enviada correctamente. Nos pondremos en contacto con usted."
            );


            setFullName("");
            setEmail("");
            setPhone("");
            setAmount("");
            setDescription("");


        } catch (error) {

            console.error(
                "Error enviando evaluación:",
                error
            );

            setError(
                error.message ||
                "Ocurrió un error al enviar la solicitud."
            );


        } finally {

            setLoading(false);

        }

    };


    return (

        <section className="formulario-seccion">


            <form
                className="contact-form"
                onSubmit={handleSubmit}
            >


                <h2>
                    RECUPERE SUS PÉRDIDAS
                </h2>


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
                            setFullName(
                                event.target.value
                            )
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
                            setEmail(
                                event.target.value
                            )
                        }
                        required
                    />

                </div>


                <div className="phone-row">

                    <PhoneInput
                        defaultCountry="mx"
                        value={phone}
                        onChange={(value) =>
                            setPhone(value)
                        }
                    />

                </div>


                <div className="input-group">

                    <FaDollarSign />

                    <input
                        type="number"
                        placeholder="Monto aproximado (USD)"
                        value={amount}
                        onChange={(event) =>
                            setAmount(
                                event.target.value
                            )
                        }
                        min="0"
                    />

                </div>


                <details className="comments-box">

                    <summary>
                        Agregar comentarios adicionales (Opcional)
                    </summary>


                    <textarea
                        placeholder="Describa brevemente su caso"
                        value={description}
                        onChange={(event) =>
                            setDescription(
                                event.target.value
                            )
                    }
                    />

                </details>


                {error && (

                    <div className="form-error">
                        {error}
                    </div>

                )}


                {message && (

                    <div className="form-success">
                        {message}
                    </div>

                )}


                <button
                    type="submit"
                    disabled={loading}
                >

                    {loading
                        ? "Enviando..."
                        : "Solicitar Evaluación Gratuita"
                    }

                </button>


                <small className="secure">

                    <FaLock />

                    Información encriptada

                </small>


            </form>


        </section>

    );

}


export default FormularioCaso;

