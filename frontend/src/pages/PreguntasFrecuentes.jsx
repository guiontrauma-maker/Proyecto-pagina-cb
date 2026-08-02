import { useState } from "react";
import { FaWhatsapp, FaCalendarAlt } from "react-icons/fa";

import "../style/PreguntasFrecuentes.css";

const preguntas = [

    {
        pregunta: "¿Qué es exactamente el reporte de evaluación de caso?",
        respuesta: "Es un análisis profesional de la información proporcionada para comprender la situación, revisar la evidencia disponible e identificar posibles alternativas de actuación."
    },

    {
        pregunta: "¿Cuánto cuesta el servicio y qué incluye?",
        respuesta: "El costo depende del tipo de caso. La evaluación incluye revisión inicial, análisis de la información, estudio de la evidencia y un reporte con observaciones y recomendaciones."
    },

    {
        pregunta: "¿En cuánto tiempo recibo mi reporte?",
        respuesta: "La mayoría de las evaluaciones son entregadas entre 24 y 72 horas hábiles, dependiendo de la complejidad del caso."
    },

    {
        pregunta: "¿Manejan casos de fraudes de criptomonedas y trading no regulado?",
        respuesta: "Sí. Evaluamos casos relacionados con criptomonedas, brokers no regulados, inversiones fraudulentas y plataformas digitales."
    },

    {
        pregunta: "¿Qué tipo de fraudes evalúan?",
        respuesta: "Analizamos fraudes bancarios, fraudes digitales, robo de identidad, inversiones fraudulentas, estafas sentimentales, esquemas piramidales y otros delitos patrimoniales."
    },

    {
        pregunta: "¿Sirven mis conversaciones de WhatsApp y correos como evidencia?",
        respuesta: "Sí. Conversaciones, correos electrónicos, comprobantes de pago, estados de cuenta y capturas de pantalla pueden aportar información relevante."
    },

    {
        pregunta: "¿Qué pasa si la empresa fraudulenta ya desapareció o borró su página web?",
        respuesta: "Todavía es posible analizar la información disponible y revisar otros elementos digitales que ayuden a documentar el caso."
    },

    {
        pregunta: "¿Necesito viajar o estar en México para usar el servicio?",
        respuesta: "No. Todo el proceso de evaluación puede realizarse completamente en línea."
    },

    {
        pregunta: "¿Pueden conectarme con un abogado?",
        respuesta: "Sí. Dependiendo del caso, podemos orientar sobre las opciones disponibles y, cuando corresponda, canalizar con especialistas."
    },

    {
        pregunta: "¿Mis datos personales están seguros?",
        respuesta: "Sí. Toda la información se maneja de forma confidencial y únicamente para la evaluación del caso."
    },

    {
        pregunta: "¿Qué diferencia hay entre una denuncia penal y una demanda civil?",
        respuesta: "Son procedimientos distintos. La evaluación permite identificar qué alternativas pueden resultar más convenientes según cada situación."
    },

    {
        pregunta: "¿Evalúan casos colectivos o de múltiples víctimas?",
        respuesta: "Sí. También analizamos situaciones donde existen varias personas afectadas por el mismo fraude."
    }

];

function PreguntasFrecuentes(){

    const [abierta, setAbierta] = useState(null);

    const cambiarPregunta = (index) => {

        if(abierta === index){

            setAbierta(null);

        }else{

            setAbierta(index);

        }

    };

    return(

        <main className="faq-page">

            <section className="faq-hero">

                <span className="faq-label">

                    Centro de Ayuda

                </span>

                <h1>

                    Preguntas Frecuentes

                </h1>

                <p>

                    Respuestas claras sobre recuperación de fraudes,
                    nuestros procesos de evaluación y la forma en que
                    protegemos la información de nuestros clientes.

                </p>

            </section>

            <section className="faq-content">

                <div className="faq-left">

                    {
                        preguntas.map((item,index)=>(

                            <article
                                className="faq-question"
                                key={index}
                            >

                                <button
                                    onClick={()=>cambiarPregunta(index)}
                                >

                                    <span>

                                        {item.pregunta}

                                    </span>

                                    <div className="faq-icon">

                                        {
                                            abierta===index ? "−" : "+"
                                        }

                                    </div>

                                </button>

                                {
                                    abierta===index &&

                                    <div className="faq-answer">

                                        <p>

                                            {item.respuesta}

                                        </p>

                                    </div>

                                }

                            </article>

                        ))
                    }

                </div>

                <aside className="faq-right">

                    <div className="urgent-card">

                        <span className="urgent-badge">

                            Prioridad

                        </span>

                        <h3>

                            ¿Su caso es urgente?

                        </h3>

                        <p>

                            Si el fraude ocurrió recientemente
                            (menos de 72 horas),
                            el tiempo puede ser un factor importante
                            para preservar información y realizar
                            un análisis oportuno.

                        </p>
                                                <button
                            className="evaluation-btn"
                            type="button"
                        >

                            <FaCalendarAlt />

                            <span>

                                Solicitar Evaluación

                            </span>

                        </button>


                        <div className="confidential-box">

                            <strong>

                                Atención confidencial

                            </strong>

                            <p>

                                ✔ Respuesta inicial en menos de 24 horas.

                            </p>

                        </div>

                    </div>

                </aside>

            </section>


            <a

                className="whatsapp-float"

                href="https://wa.me/5663820152"

                target="_blank"

                rel="noopener noreferrer"

            >

                <FaWhatsapp />

            </a>

        </main>

    );

}

export default PreguntasFrecuentes;