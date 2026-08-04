import { useState } from "react";
import "../style/Nosotros.css";

import {
    FaShieldAlt,
    FaSearch,
    FaCheckCircle,
    FaUsers,
    FaLock,
    FaChartLine,
    FaClock,
    FaWhatsapp,
    FaBalanceScale
} from "react-icons/fa";


function Nosotros() {


    const [formData, setFormData] = useState({

        fullName: "",
        email: "",
        phone: "",
        fraudType: "",
        amount: "",
        description: ""

    });



    const [enviando, setEnviando] = useState(false);

    const [mensaje, setMensaje] = useState("");

    const [error, setError] = useState("");





    const handleChange = (e) => {

        const { name, value } = e.target;


        setFormData((prev) => ({

            ...prev,

            [name]: value

        }));

    };





    const handleSubmit = async (e) => {

        e.preventDefault();


        setMensaje("");

        setError("");

        setEnviando(true);



        try {


            const response = await fetch(

                "${import.meta.env.VITE_API_URL}/api/evaluaciones",

                {

                    method: "POST",

                    headers: {

                        "Content-Type": "application/json"

                    },


                    body: JSON.stringify({

                        fullName: formData.fullName,

                        email: formData.email,

                        phone: formData.phone,

                        fraudType: formData.fraudType,

                        amount: Number(formData.amount) || 0,

                        currency: "MXN",

                        description: formData.description,

                        source: "Nosotros"

                    })

                }

            );



            const data = await response.json();



            if (!response.ok) {

                throw new Error(

                    data.message ||

                    "No fue posible enviar la evaluación."

                );

            }



            setMensaje(

                "Tu evaluación fue enviada correctamente. Nos pondremos en contacto contigo."

            );



            setFormData({

                fullName: "",

                email: "",

                phone: "",

                fraudType: "",

                amount: "",

                description: ""

            });



        } catch (error) {


            console.error(

                "Error enviando evaluación:",

                error

            );


            setError(

                error.message ||

                "Ocurrió un error al enviar la información."

            );


        } finally {


            setEnviando(false);


        }


    };





    return (

        <main className="nosotros">



            {/* HERO */}



            <section className="nosotros-hero">



                <div className="hero-content">



                    <div className="hero-badge">


                        <FaShieldAlt />


                        Transparencia y claridad


                    </div>





                    <h1>


                        <span>

                            Conoce Grupo SSM:

                        </span>


                        <br />


                        Tu punto de defensa ante el fraude.



                    </h1>






                    <p>


                        Somos una plataforma de evaluación de casos que ayuda

                        a personas afectadas por fraude a comprender su situación

                        y conocer las alternativas disponibles.


                    </p>






                    <div className="no-abogados-card">



                        <FaBalanceScale />



                        <div>


                            <h3>

                                No somos un despacho de abogados

                            </h3>



                            <p>

                                Brindamos evaluación, análisis y orientación

                                inicial para comprender cada caso.

                            </p>


                        </div>



                    </div>





                </div>







                <div className="hero-image">



                    <img

                        src="/images/nosotros.jpg"

                        alt="Grupo SSM"

                    />



                </div>




            </section>







            {/* NUESTRA ESENCIA */}



            <section className="esencia-section">





                <div className="section-heading">


                    <h2>

                        Nuestra esencia

                    </h2>



                    <p>

                        Principios que guían nuestra forma de evaluar

                        y orientar cada situación.

                    </p>



                </div>







                <div className="esencia-grid">






                    <article className="esencia-card">



                        <div className="icon-box">


                            <FaShieldAlt />


                        </div>





                        <h3>

                            Misión

                        </h3>





                        <p>

                            Brindar apoyo profesional y orientación clara

                            a personas afectadas por fraudes financieros

                            y digitales.

                        </p>



                        <p>

                            Ayudamos a tomar decisiones informadas

                            mediante un análisis estructurado.

                        </p>



                    </article>








                    <article className="esencia-card">



                        <div className="icon-box">


                            <FaSearch />


                        </div>





                        <h3>

                            Visión

                        </h3>





                        <p>

                            Ser una plataforma confiable en evaluación

                            y orientación de casos relacionados con fraude.

                        </p>



                        <p>

                            Desarrollando herramientas que permitan

                            analizar cada situación responsablemente.

                        </p>



                    </article>








                    <article className="esencia-card">



                        <div className="icon-box">


                            <FaCheckCircle />


                        </div>





                        <h3>

                            Valores

                        </h3>





                        <p>

                            Transparencia, confidencialidad,

                            compromiso y profesionalismo.

                        </p>



                        <p>

                            Manteniendo comunicación clara durante

                            todo el proceso.

                        </p>



                    </article>






                </div>





            </section>
                        {/* PROCESO DE EVALUACION */}


            <section className="proceso-section">


                <div className="section-heading">


                    <h2>

                        ¿Cómo funciona nuestra evaluación?

                    </h2>



                    <p>

                        Un proceso diseñado para analizar tu situación

                        y brindarte orientación clara.

                    </p>


                </div>





                <div className="proceso-list">



                    <article>


                        <span>

                            01

                        </span>



                        <div className="proceso-content">


                            <h3>

                                Cuéntanos tu caso

                            </h3>



                            <p>

                                Recibimos la información inicial para

                                comprender qué ocurrió y conocer

                                los detalles principales.

                            </p>


                        </div>



                    </article>







                    <article>


                        <span>

                            02

                        </span>



                        <div className="proceso-content">


                            <h3>

                                Revisamos la información

                            </h3>



                            <p>

                                Analizamos los datos proporcionados,

                                documentos y elementos importantes

                                relacionados con la situación.

                            </p>


                        </div>



                    </article>








                    <article>


                        <span>

                            03

                        </span>



                        <div className="proceso-content">


                            <h3>

                                Recibes orientación

                            </h3>



                            <p>

                                Explicamos las alternativas disponibles

                                y los siguientes pasos que podrían

                                considerarse.

                            </p>


                        </div>



                    </article>






                    <article className="proceso-opcional">


                        <span>

                            +

                        </span>



                        <div>


                            <h3>

                                Conexión con un abogado

                            </h3>



                            <p>

                                Si lo deseas, podemos orientarte para

                                continuar con apoyo legal especializado

                                bajo tu consentimiento.

                            </p>


                        </div>



                    </article>





                </div>



            </section>









            {/* POR QUE ELEGIRNOS */}





            <section className="porque-section">





                <div className="section-heading light">


                    <h2>

                        ¿Por qué elegirnos?

                    </h2>



                    <p>

                        Un enfoque estructurado para comprender

                        cada situación y brindar orientación clara.

                    </p>



                </div>







                <div className="porque-grid">





                    <article className="porque-card">


                        <div className="porque-icon">


                            <FaUsers />


                        </div>



                        <h3>

                            Atención personalizada

                        </h3>



                        <p>

                            Cada caso cuenta con características

                            diferentes y requiere un análisis

                            individual.

                        </p>



                    </article>









                    <article className="porque-card">


                        <div className="porque-icon">


                            <FaLock />


                        </div>



                        <h3>

                            Información protegida

                        </h3>



                        <p>

                            Tratamos la información proporcionada

                            con responsabilidad y confidencialidad.

                        </p>



                    </article>









                    <article className="porque-card">


                        <div className="porque-icon">


                            <FaChartLine />


                        </div>



                        <h3>

                            Análisis especializado

                        </h3>



                        <p>

                            Aplicamos un proceso ordenado para

                            identificar aspectos importantes del caso.

                        </p>



                    </article>









                    <article className="porque-card">


                        <div className="porque-icon">


                            <FaCheckCircle />


                        </div>



                        <h3>

                            Proceso transparente

                        </h3>



                        <p>

                            Explicamos cada etapa para que tengas

                            claridad durante la evaluación.

                        </p>



                    </article>





                </div>





            </section>
                        {/* FORMULARIO */}


<section className="formulario-section">


    <div className="formulario-wrapper">



        <div className="formulario-info">


            <h2>

                ¿Listo para recuperar
                la tranquilidad?

            </h2>



            <p>

                Nuestro equipo está preparado para escuchar
                tu situación y brindarte una primera orientación.

            </p>




            <div className="info-beneficio">

                <FaClock />

                <span>

                    Respuestas en 24 horas

                </span>

            </div>




            <div className="info-beneficio">

                <FaLock />

                <span>

                    Información protegida y confidencial

                </span>

            </div>




            <div className="contact-box">


                <small>

                    Línea directa

                </small>


                <h3>

                    5663820152

                </h3>


                <p>

                    recuperacionasistente@gmail.com

                </p>


            </div>



        </div>








        <form

            className="evaluacion-form"

            onSubmit={handleSubmit}

        >


            <h2>

                Solicita una evaluación

            </h2>



            <p>

                Cuéntanos tu situación y recibe
                orientación inicial sobre tu caso.

            </p>





            <div className="form-grid">



                <input

                    type="text"

                    name="fullName"

                    value={formData.fullName}

                    onChange={handleChange}

                    placeholder="Nombre completo"

                    required

                />



                <input

                    type="email"

                    name="email"

                    value={formData.email}

                    onChange={handleChange}

                    placeholder="Correo electrónico"

                    required

                />



                <input

                    type="tel"

                    name="phone"

                    value={formData.phone}

                    onChange={handleChange}

                    placeholder="Número de contacto"

                />



                <select

                    name="fraudType"

                    value={formData.fraudType}

                    onChange={handleChange}

                    required

                >

                    <option value="">

                        Selecciona tipo de fraude

                    </option>


                    <option value="Fraude financiero">

                        Fraude financiero

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




                <input

                    type="number"

                    name="amount"

                    value={formData.amount}

                    onChange={handleChange}

                    placeholder="Monto aproximado perdido"

                />





                <textarea

                    name="description"

                    value={formData.description}

                    onChange={handleChange}

                    placeholder="Describe brevemente tu situación"

                />



            </div>






            <button

                type="submit"

                disabled={enviando}

            >

                {

                    enviando

                    ?

                    "Enviando..."

                    :

                    "Solicitar evaluación"

                }


            </button>






            {

                mensaje &&

                <div className="form-success">

                    {mensaje}

                </div>

            }





            {

                error &&

                <div className="form-error">

                    {error}

                </div>

            }





            <div className="secure-message">


                <FaLock />


                Información protegida y confidencial


            </div>




        </form>



    </div>



</section>

            {/* WHATSAPP */}





            <a

                href="https://wa.me/5663820152"

                className="whatsapp-button"

                target="_blank"

                rel="noopener noreferrer"

            >


                <FaWhatsapp />


            </a>





        </main>



    );

}



export default Nosotros;



