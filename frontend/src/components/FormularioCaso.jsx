import { useState } from "react";

import {
    FaUser,
    FaEnvelope,
    FaDollarSign,
    FaLock,
    FaCheckCircle
} from "react-icons/fa";

import { PhoneInput } from "react-international-phone";

import "react-international-phone/style.css";

import "../style/FormularioCaso.css";


function FormularioCaso({ origen = "Formulario general" }) {


    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [fraudType, setFraudType] = useState("");
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
                "${import.meta.env.VITE_API_URL}/api/evaluaciones",
                {

                    method:"POST",

                    headers:{
                        "Content-Type":"application/json"
                    },


                    body:JSON.stringify({

                        fullName,

                        email,

                        phone,

                        fraudType,

                        origin: origen,

                        formSource: origen,

                        amount:
                            Number(amount) || 0,

                        currency:"MXN",

                        description

                    })

                }
            );



            const data = await response.json();



            if(!response.ok){

                throw new Error(
                    data.message ||
                    "No fue posible enviar la solicitud."
                );

            }



            setMessage(
                "Información enviada correctamente. Nuestro equipo revisará su caso y se pondrá en contacto contigo."
            );



            setFullName("");
            setEmail("");
            setPhone("");
            setFraudType("");
            setAmount("");
            setDescription("");



        }catch(error){


            console.error(
                "Error enviando evaluación:",
                error
            );


            setError(
                error.message ||
                "Ocurrió un error al enviar la información."
            );



        }finally{


            setLoading(false);


        }


    };





    return (

        <section className="formulario-seccion">


            <form
                className="caso-form"
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

                        onChange={(event)=>
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

                        onChange={(event)=>
                            setEmail(event.target.value)
                        }

                        required

                    />


                </div>






                <div className="select-group">


                    <select

                        value={fraudType}

                        onChange={(event)=>
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


                        <option value="Otro">
                            Otro
                        </option>


                    </select>


                </div>







                <div className="caso-phone-row">


                    <PhoneInput

                        defaultCountry="mx"

                        value={phone}

                        onChange={(value)=>
                            setPhone(value)
                        }

                    />


                </div>







                <div className="input-group">


                    <FaDollarSign />


                    <input

                        type="number"

                        placeholder="Monto aproximado perdido"

                        value={amount}

                        onChange={(event)=>
                            setAmount(event.target.value)
                        }

                        min="0"

                    />


                </div>







                <div className="comments-box">


                    <textarea

                        placeholder="Describa brevemente su caso"

                        value={description}

                        onChange={(event)=>
                            setDescription(event.target.value)
                        }

                    />


                </div>







                {
                    error &&

                    <div className="form-error">

                        {error}

                    </div>

                }







                {
                    message &&

                    <div className="form-success">


                        <FaCheckCircle />


                        <span>

                            {message}

                        </span>


                    </div>

                }







                <button

                    type="submit"

                    disabled={loading}

                >


                    {
                        loading

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



