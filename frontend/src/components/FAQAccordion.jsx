import { useState } from "react";

function FAQAccordion({ preguntas }) {

    const [abierta, setAbierta] = useState(null);

    const cambiarPregunta = (indice) => {

        if (abierta === indice) {

            setAbierta(null);

        } else {

            setAbierta(indice);

        }

    };

    return (

        <section className="faq">

            <h2>

                Preguntas frecuentes

            </h2>

            {

                preguntas.map((pregunta, indice) => (

                    <div
                        className="faq-card"
                        key={indice}
                    >

                        <button

                            className="faq-question"

                            onClick={() => cambiarPregunta(indice)}

                        >

                            {pregunta.titulo}

                        </button>

                        {

                            abierta === indice && (

                                <div className="faq-answer">

                                    <p>

                                        {pregunta.respuesta}

                                    </p>

                                </div>

                            )

                        }

                    </div>

                ))

            }

        </section>

    );

}

export default FAQAccordion;



