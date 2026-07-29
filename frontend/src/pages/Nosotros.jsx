
import { useState } from "react";
import "../style/Nosotros.css";

import {
    FaShieldAlt,
    FaClock,
    FaLock,
    FaWhatsapp,
    FaSearch,
    FaChartLine,
    FaCheckCircle,
    FaUsers
} from "react-icons/fa";

function Nosotros() {

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        fraudType: "",
        description: ""
    });

    const [enviando, setEnviando] = useState(false);
    const [mensaje, setMensaje] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {

        const {
            name,
            value
        } = e.target;

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
                "http://localhost:5000/api/evaluaciones",
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

                        amount: 0,

                        currency: "USD",

                        description: formData.description

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
                description: ""
            });


        } catch (error) {

            console.error(
                "Error enviando evaluación:",
                error
            );

            setError(
                error.message ||
                "Ocurrió un error al enviar la evaluación."
            );

        } finally {

            setEnviando(false);

        }

    };


    return (

        <main className="nosotros">

            {/* =========================================
                HERO
            ========================================= */}

            <section className="nosotros-hero">

                <div className="nosotros-info">

                    <div className="nosotros-badge">

                        <FaShieldAlt className="badge-icon" />

                        Transparencia y claridad

                    </div>


                    <h1 className="nosotros-titulo">

                        <span className="titulo-verde">
                            Conoce grupo SSM:
                        </span>

                        <br />

                        <span className="titulo-negro">
                            Tu punto de defensa ante el fraude.
                        </span>

                    </h1>


                    <p>

                        Somos una plataforma de evaluación de casos que ayuda
                        a personas afectadas por fraude a entender su situación
                        y conocer sus opciones. No somos un despacho de abogados.

                    </p>

                </div>


                <div className="nosotros-imagen">

                    <img
                        src="/images/nosotros.jpg"
                        alt="Grupo SSM"
                    />

                    <span>
                        Orientación clara cuando más la necesitas
                    </span>

                </div>

            </section>


            {/* =========================================
                NUESTRA ESENCIA
            ========================================= */}

            <section className="mision-section">

                <div className="mision-header">

                    <h2>
                        Nuestra esencia
                    </h2>

                    <p>
                        Conoce los principios que guían cada evaluación
                        y orientación que brindamos.
                    </p>

                </div>


                <div className="mision-grid">


                    <div className="mision-card">

                        <div className="mision-icon">
                            <FaShieldAlt />
                        </div>

                        <h3>
                            Misión
                        </h3>

                        <p>
                            Brindar apoyo profesional y orientación clara a
                            personas afectadas por fraudes financieros y
                            digitales, ayudándolas a comprender su situación
                            y conocer las alternativas disponibles para su caso.
                        </p>

                        <p>
                            Buscamos que cada persona pueda tomar decisiones
                            informadas con mayor claridad y confianza.
                        </p>

                    </div>


                    <div className="mision-card">

                        <div className="mision-icon">
                            <FaSearch />
                        </div>

                        <h3>
                            Visión
                        </h3>

                        <p>
                            Ser un referente de confianza en la evaluación y
                            orientación de casos relacionados con fraude,
                            ofreciendo procesos claros y estructurados.
                        </p>

                        <p>
                            Nuestro objetivo es continuar desarrollando
                            herramientas que permitan analizar cada situación
                            de manera responsable y profesional.
                        </p>

                    </div>


                    <div className="mision-card">

                        <div className="mision-icon">
                            <FaCheckCircle />
                        </div>

                        <h3>
                            Valores
                        </h3>

                        <p>
                            Transparencia, confidencialidad, compromiso,
                            profesionalismo y atención personalizada son
                            algunos de los principios que orientan nuestro trabajo.
                        </p>

                        <p>
                            Cada evaluación busca mantener una comunicación
                            clara y responsable durante todo el proceso.
                        </p>

                    </div>


                </div>

            </section>


            {/* =========================================
                CÓMO FUNCIONA NUESTRA EVALUACIÓN
            ========================================= */}

            <section className="proceso-section">

                <div className="proceso-header">

                    <h2>
                        ¿Cómo funciona nuestra evaluación?
                    </h2>

                    <p>
                        Nuestro proceso está diseñado para brindar
                        claridad, análisis y orientación en cada etapa.
                    </p>

                </div>


                <div className="proceso-timeline">


                    {/* PASO 1 */}

                    <div className="proceso-item activo">

                        <div className="proceso-numero">
                            01
                        </div>

                        <div className="proceso-contenido">

                            <h3>
                                Cuéntanos tu caso
                            </h3>

                            <p>
                                Analizamos la información inicial para comprender
                                la situación y conocer los detalles del caso.
                                Puedes explicarnos qué ocurrió, cuándo sucedió
                                y cuáles fueron las afectaciones.
                            </p>

                        </div>

                    </div>


                    {/* PASO 2 */}

                    <div className="proceso-item">

                        <div className="proceso-numero">
                            02
                        </div>

                        <div className="proceso-contenido">

                            <h3>
                                Revisamos la información
                            </h3>

                            <p>
                                Evaluamos documentos, evidencias y elementos
                                relacionados con la situación presentada para
                                identificar los aspectos más importantes del caso.
                            </p>

                        </div>

                    </div>


                    {/* PASO 3 */}

                    <div className="proceso-item">

                        <div className="proceso-numero">
                            03
                        </div>

                        <div className="proceso-contenido">

                            <h3>
                                Recibes orientación
                            </h3>

                            <p>
                                Te explicamos las opciones disponibles y los
                                siguientes pasos que podrían considerarse
                                de acuerdo con las características de tu caso.
                            </p>

                        </div>

                    </div>


                    {/* PASO 4 */}

                    <div className="proceso-item opcional">

                        <div className="proceso-numero">
                            +
                        </div>

                        <div className="proceso-contenido">

                            <span>
                                Opcional
                            </span>

                            <h3>
                                Conexión con un abogado
                            </h3>

                            <p>
                                Si lo deseas, podemos orientarte para continuar
                                con apoyo legal especializado, siempre bajo
                                tu consentimiento.
                            </p>

                        </div>

                    </div>


                </div>

            </section>


            {/* =========================================
                POR QUÉ ELEGIRNOS
            ========================================= */}

            <section className="porque-section">

                <div className="porque-header">

                    <h2>
                        ¿Por qué elegirnos?
                    </h2>

                    <p>
                        Un enfoque estructurado para analizar tu situación
                        y brindarte orientación clara.
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
                            Cada caso es diferente. Analizamos las
                            características particulares de cada situación
                            antes de establecer una orientación.
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
                            Tratamos la información relacionada con cada caso
                            con responsabilidad, discreción y confidencialidad.
                        </p>

                    </article>


                    <article className="porque-card">

                        <div className="porque-icon">
                            <FaChartLine />
                        </div>

                        <h3>
                            Estrategia especializada
                        </h3>

                        <p>
                            Utilizamos un proceso estructurado para analizar
                            la información y determinar las alternativas
                            disponibles.
                        </p>

                    </article>


                    <article className="porque-card">

                        <div className="porque-icon">
                            <FaCheckCircle />
                        </div>

                        <h3>
                            Proceso claro
                        </h3>

                        <p>
                            Te explicamos cada etapa de la evaluación para
                            que puedas comprender mejor qué ocurre con tu caso.
                        </p>

                    </article>


                </div>

            </section>


            {/* =========================================
                FORMULARIO
            ========================================= */}

            <section className="formulario-section">

                <div className="formulario-contenedor">


                    {/* INFORMACIÓN */}

                    <div className="formulario-info">

                        <h2>
                            ¿Listo para recuperar
                            la tranquilidad?
                        </h2>

                        <p>
                            Nuestro equipo está listo para
                            escuchar tu historia.
                        </p>


                        <div className="formulario-beneficio">

                            <FaClock />

                            <span>
                                Respuestas en 24 horas
                            </span>

                        </div>


                        <div className="formulario-beneficio">

                            <FaLock />

                            <span>
                                Confidencialidad absoluta
                            </span>

                        </div>


                        <div className="formulario-contacto">

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


                    {/* FORMULARIO */}

                    <form
                        className="contact-form formulario-card"
                        onSubmit={handleSubmit}
                    >

                        <h2>
                            Solicita una evaluación
                        </h2>

                        <p>
                            Cuéntanos tu situación y recibe
                            orientación inicial sobre tu caso.
                        </p>


                        <div className="input-group">

                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Nombre completo"
                                required
                            />

                        </div>


                        <div className="input-group">

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Correo electrónico"
                                required
                            />

                        </div>


                        <div className="input-group">

                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Número de contacto"
                            />

                        </div>


                        <div className="input-group">

                            <select
                                name="fraudType"
                                value={formData.fraudType}
                                onChange={handleChange}
                                required
                            >

                                <option value="" disabled>
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

                        </div>


                        <div className="comments-box">

                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Describe brevemente tu situación"
                            ></textarea>

                        </div>


                        <button
                            type="submit"
                            disabled={enviando}
                        >

                            {enviando
                                ? "Enviando..."
                                : "Solicitar evaluación"
                            }

                        </button>


                        {mensaje && (

                            <div className="form-success">
                                {mensaje}
                            </div>

                        )}


                        {error && (

                            <div className="form-error">
                                {error}
                            </div>

                        )}


                        <div className="secure">

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

