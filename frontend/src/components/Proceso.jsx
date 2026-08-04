import { FaFileAlt, FaSearch, FaBullseye, FaHandshake } from "react-icons/fa";
function Proceso() {

    const pasos = [

    {
        icono: <FaFileAlt />,
        titulo: "Cuéntanos tu caso",
        texto: "Analizamos la información inicial y los detalles de la situación para comprender el problema y definir el camino adecuado."
    },

    {
        icono: <FaSearch />,
        titulo: "Evaluamos la situación",
        texto: "Revisamos documentos, movimientos, evidencias disponibles y todos los elementos necesarios para realizar un análisis completo."
    },

    {
        icono: <FaBullseye />,
        titulo: "Definimos una estrategia",
        texto: "Explicamos las acciones recomendadas y establecemos una estrategia personalizada según las características del caso."
    },

    {
        icono: <FaHandshake />,
        titulo: "Damos seguimiento",
        texto: "Acompañamos todo el proceso brindando orientación constante y resolviendo cada una de tus dudas."
    }

];
    return (

        <section className="proceso">


            <div className="proceso-header">

                <h2>
                    ¿Cómo funciona nuestro proceso?
                </h2>

                <p>
                    Nuestro método de trabajo está diseñado para ofrecer
                    una atención clara, profesional y personalizada.
                </p>

            </div>



            <div className="timeline">


                {
                    pasos.map((paso, index)=>(

                        <div 
                            className="timeline-item"
                            key={index}
                        >


                            <div className="timeline-left">


                                <div className="timeline-circle">

                                    {paso.icono}

                                </div>


                                {
                                    index !== pasos.length - 1 &&

                                    <div className="timeline-line"></div>

                                }


                            </div>



                            <div className="timeline-card">


                                <h3>
                                    {paso.titulo}
                                </h3>


                                <p>
                                    {paso.texto}
                                </p>


                            </div>


                        </div>


                    ))
                }


            </div>


        </section>

    );

}


export default Proceso;



