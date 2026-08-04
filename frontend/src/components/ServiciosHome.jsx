import { Link } from "react-router-dom";


function ServiciosHome(){

    const servicios = [

        {
            imagen:"/images/bancario.jpg",
            titulo:"Fraudes Bancarios",
            descripcion:
            "Movimientos no reconocidos, transferencias fraudulentas, cargos indebidos y operaciones realizadas sin autorización.",
            ruta:"/servicios/fraudes-bancarios"
        },


        {
            imagen:"/images/digital.jpg",
            titulo:"Fraudes Digitales",
            descripcion:
            "Engaños mediante páginas falsas, phishing, redes sociales, aplicaciones y robo de información.",
            ruta:"/servicios/fraudes-digitales"
        },


        {
            imagen:"/images/identidad.jpg",
            titulo:"Robo de Identidad",
            descripcion:
            "Uso de información personal para solicitar créditos, realizar compras o cometer delitos financieros.",
            ruta:"/servicios/robo-identidad"
        },


        {
            imagen:"/images/inversion.jpg",
            titulo:"Estafas de Inversión",
            descripcion:
            "Falsas oportunidades financieras, plataformas fraudulentas y promesas de ganancias irreales.",
            ruta:"/servicios/estafas-inversion"
        },


        {
            imagen:"/images/romantica.jpg",
            titulo:"Estafas Románticas",
            descripcion:
            "Manipulación emocional mediante relaciones falsas con el objetivo de obtener dinero o información.",
            ruta:"/servicios/estafas-romanticas"
        },


        {
            imagen:"/images/piramidal.jpg",
            titulo:"Estafas Piramidales",
            descripcion:
            "Modelos fraudulentos donde se prometen ganancias mediante la incorporación de nuevos participantes.",
            ruta:"/servicios/estafas-piramidales"
        }

    ];


    return(

        <section className="servicios-home">


            <div className="servicios-header">

                <h2>
                    Áreas de práctica
                </h2>


                <p>
                    Analizamos diferentes tipos de fraude financiero y digital
                    para brindar orientación especializada.
                </p>

            </div>



            <div className="servicios-grid">


                {
                    servicios.map((servicio,index)=>(


                        <article 
                            className="servicio-card"
                            key={index}
                        >


                            <img 
                                src={servicio.imagen}
                                alt={servicio.titulo}
                            />



                            <div className="servicio-content">


                                <h3>

                                    {servicio.titulo}

                                </h3>


                                <p>

                                    {servicio.descripcion}

                                </p>



                                <Link to={servicio.ruta}>

                                    Ver información

                                </Link>


                            </div>


                        </article>


                    ))
                }


            </div>


        </section>

    );

}


export default ServiciosHome;



