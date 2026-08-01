import { useState } from "react";
import { Link } from "react-router-dom";

import {
    FaUser,
    FaEnvelope,
    FaDollarSign,
    FaLock,
    FaStar,
    FaMoneyBillWave,
    FaExclamationTriangle,
    FaUniversity,
    FaLaptopCode,
    FaUserShield,
    FaChartLine,
    FaHeart,
    FaUsers,
    FaShieldAlt,
    FaCheckCircle,
    FaSearch,
    FaFileAlt,
    FaClipboardCheck,
    FaComments,
    FaGavel,
    FaArrowRight,
    FaChevronDown,
    FaRegNewspaper,
    FaWhatsapp
} from "react-icons/fa";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

function Home() {

    const [faqAbierta, setFaqAbierta] = useState(null);
// =========================================================
// FORMULARIO DE EVALUACIÓN
// =========================================================

const [formulario, setFormulario] = useState({
    fullName: "",
    email: "",
    phone: "",
    amount: "",
    description: ""
});

const [enviando, setEnviando] = useState(false);
const [mensajeFormulario, setMensajeFormulario] = useState("");

const toggleFaq = (index) => {
    setFaqAbierta(
        faqAbierta === index ? null : index
    );
};

// =========================================================
// CAMBIOS DEL FORMULARIO
// =========================================================

const handleChange = (e) => {

    const {
        name,
        value
    } = e.target;

    setFormulario((prev) => ({
        ...prev,
        [name]: value
    }));

};

const handlePhoneChange = (phone) => {

    setFormulario((prev) => ({
        ...prev,
        phone
    }));

};

// =========================================================
// ENVIAR EVALUACIÓN A MONGODB
// =========================================================

const handleSubmit = async (e) => {

    e.preventDefault();

    setEnviando(true);
    setMensajeFormulario("");

    try {

        const response = await fetch(
            "http://localhost:5000/api/evaluaciones",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    fullName:
                        formulario.fullName,

                    email:
                        formulario.email,

                    phone:
                        formulario.phone,

                    fraudType:
                        "Evaluación general",

                    amount:
                        Number(formulario.amount) || 0,

                    currency:
                        "USD",

                    description:
                        formulario.description

                })
            }
        );

        const data =
            await response.json();

        if (!response.ok) {

            throw new Error(
                data.message ||
                "No se pudo enviar la evaluación."
            );

        }

        setMensajeFormulario(
            "Tu solicitud fue enviada correctamente. Nos pondremos en contacto contigo."
        );

        setFormulario({
            fullName: "",
            email: "",
            phone: "",
            amount: "",
            description: ""
        });

    } catch (error) {

        console.error(
            "Error enviando evaluación:",
            error
        );

        setMensajeFormulario(
            "No fue posible enviar tu solicitud. Intenta nuevamente."
        );

    } finally {

        setEnviando(false);

    }

};

// =========================================================
// ÁREAS
// =========================================================

const areas = [
    {
        icon: <FaUniversity />,
        titulo: "Fraudes Bancarios",
        texto: "Analizamos operaciones no reconocidas, transferencias fraudulentas y situaciones relacionadas con SPEI y banca digital.",
        ruta: "/servicios/fraudes-bancarios",
        clase: "icono-verde"
    },
    {
        icon: <FaLaptopCode />,
        titulo: "Fraudes Digitales",
        texto: "Investigamos engaños realizados mediante plataformas digitales, redes sociales y medios electrónicos.",
        ruta: "/servicios/fraudes-digitales",
        clase: "icono-azul"
    },
    {
        icon: <FaUserShield />,
        titulo: "Robo de Identidad",
        texto: "Evaluamos casos donde información personal es utilizada para generar afectaciones económicas.",
        ruta: "/servicios/robo-identidad",
        clase: "icono-oliva"
    },
    {
        icon: <FaChartLine />,
        titulo: "Estafas de Inversión",
        texto: "Analizamos oportunidades financieras falsas, brokers fraudulentos y pérdidas patrimoniales.",
        ruta: "/servicios/estafas-inversion",
        clase: "icono-morado"
    },
    {
        icon: <FaHeart />,
        titulo: "Estafas Románticas",
        texto: "Investigamos fraudes sentimentales donde la confianza personal es utilizada para obtener recursos.",
        ruta: "/servicios/estafas-romanticas",
        clase: "icono-coral"
    },
    {
        icon: <FaUsers />,
        titulo: "Estafas Piramidales",
        texto: "Atendemos casos de esquemas Ponzi y fraudes colectivos que afectan a múltiples personas.",
        ruta: "/servicios/estafas-piramidales",
        clase: "icono-gris"
    }
];

// =========================================================
// PASOS
// =========================================================

const pasos = [
    {
        numero: "01",
        icon: <FaSearch />,
        titulo: "Cuéntanos tu caso",
        texto: "Analizamos la información inicial y los detalles de la situación."
    },
    {
        numero: "02",
        icon: <FaFileAlt />,
        titulo: "Evaluamos la situación",
        texto: "Revisamos documentos, movimientos y evidencias disponibles."
    },
    {
        numero: "03",
        icon: <FaClipboardCheck />,
        titulo: "Definimos una estrategia",
        texto: "Explicamos las acciones recomendadas y las alternativas disponibles."
    },
    {
        numero: "04",
        icon: <FaShieldAlt />,
        titulo: "Te acompañamos",
        texto: "Damos seguimiento al proceso y a las acciones necesarias para tu caso."
    }
];

// =========================================================
// RAZONES
// =========================================================

const razones = [
    {
        numero: "01",
        icon: <FaShieldAlt />,
        titulo: "Experiencia especializada",
        texto: "Conocemos las principales modalidades de fraude financiero y digital."
    },
    {
        numero: "02",
        icon: <FaSearch />,
        titulo: "Análisis personalizado",
        texto: "Cada situación se estudia de acuerdo con sus circunstancias y evidencias."
    },
    {
        numero: "03",
        icon: <FaChartLine />,
        titulo: "Tecnología y estrategia",
        texto: "Utilizamos herramientas de análisis para comprender mejor cada caso."
    },
    {
        numero: "04",
        icon: <FaComments />,
        titulo: "Acompañamiento continuo",
        texto: "Mantenemos comunicación durante las distintas etapas del proceso."
    }
];

// =========================================================
// ALERTAS
// =========================================================

const alertas = [
    {
        entidad: "Broker Alpha Capital",
        fraude: "Estafa de inversión",
        fecha: "15 Marzo 2026",
        estado: "Bajo investigación"
    },
    {
        entidad: "Global Trade Markets",
        fraude: "Broker no regulado",
        fecha: "22 Febrero 2026",
        estado: "Alerta activa"
    },
    {
        entidad: "Crypto Investment Group",
        fraude: "Fraude con criptomonedas",
        fecha: "10 Febrero 2026",
        estado: "Bajo investigación"
    },
    {
        entidad: "Prime Wealth Network",
        fraude: "Esquema de inversión",
        fecha: "28 Enero 2026",
        estado: "Alerta activa"
    },
    {
        entidad: "Capital Pro Online",
        fraude: "Fraude financiero",
        fecha: "14 Enero 2026",
        estado: "Bajo investigación"
    },
    {
        entidad: "Smart Assets Group",
        fraude: "Plataforma fraudulenta",
        fecha: "05 Enero 2026",
        estado: "Alerta activa"
    }
];

// =========================================================
// TESTIMONIOS
// =========================================================

const testimonios = [
    {
        nombre: "Cliente verificado",
        texto: "Recibí orientación clara para entender qué había ocurrido con mi operación y cuáles eran mis alternativas.",
        estrellas: 5,
        recuperado: "$18,500 USD"
    },
    {
        nombre: "Cliente verificado",
        texto: "Desde el primer contacto me explicaron el proceso de forma sencilla y estuvieron pendientes de mi caso.",
        estrellas: 5,
        recuperado: "$27,000 USD"
    },
    {
        nombre: "Cliente verificado",
        texto: "La revisión de mi situación me permitió entender mejor el fraude y tomar decisiones con mayor información.",
        estrellas: 5,
        recuperado: "$42,000 USD"
    }
];

// =========================================================
// PREGUNTAS
// =========================================================

const preguntas = [
    {
        pregunta: "¿La revisión inicial de mi caso tiene algún costo?",
        respuesta: "La revisión inicial está diseñada para conocer los detalles de tu situación, analizar la información disponible y explicarte las alternativas que podrían existir."
    },
    {
        pregunta: "¿Qué tipo de fraudes pueden analizar?",
        respuesta: "Podemos analizar situaciones relacionadas con fraudes bancarios, digitales, inversiones, brokers no regulados, robo de identidad, estafas románticas y esquemas piramidales."
    },
    {
        pregunta: "¿Qué información necesito proporcionar?",
        respuesta: "Es recomendable contar con la mayor cantidad de información posible sobre el caso, como comprobantes, comunicaciones, movimientos, datos de las plataformas involucradas y cualquier evidencia disponible."
    },
    {
        pregunta: "¿Pueden garantizar que recuperaré mi dinero?",
        respuesta: "Ningún caso debe considerarse garantizado. Primero es necesario analizar las circunstancias, la evidencia y las posibilidades existentes para determinar qué acciones pueden ser viables."
    },
    {
        pregunta: "¿Qué ocurre después de enviar mi información?",
        respuesta: "La información permite realizar una primera evaluación de tu situación y determinar cuáles podrían ser los siguientes pasos."
    }
];

return (
    <main className="home-page">

        {/* HERO */}

        <section className="hero">

            <div className="hero-text">

                <div className="hero-alert">
                    <FaExclamationTriangle />
                    <span>Importante: el tiempo es clave</span>
                </div>

                <h1 className="hero-title">
                    ¿FUISTE VÍCTIMA DE UNA ESTAFA?
                </h1>

                <h2 className="hero-subtitle">
                    RECUPERE SUS PÉRDIDAS
                </h2>

                <p>
                    Actúa ahora antes de que sea tarde.
                    Expertos en rastreo de activos digitales,
                    SPEI, brokers no regulados y estafas en línea.
                    Tecnología avanzada y estrategias inteligentes
                    para recuperar lo que te corresponde.
                </p>

                <h3 className="hero-free">
                    ¡CONSULTA GRATUITA HOY MISMO!
                </h3>

                <div className="hero-info">

                    <div className="rating-card">

                        <div className="stars">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>

                        <h4>4.9</h4>

                        <p>
                            Basado en +500 reseñas
                        </p>

                    </div>

                    <div className="money-card">

                        <FaMoneyBillWave className="money-icon" />

                        <div>
                            <h4>+$50 M</h4>

                            <p>
                                Recuperados para víctimas
                            </p>
                        </div>

                    </div>

                </div>

            </div>


            {/* FORMULARIO */}

            <form
                className="contact-form"
                id="formulario"
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
                        name="fullName"
                        value={formulario.fullName}
                        onChange={handleChange}
                        placeholder="Nombre completo"
                        required
                    />

                </div>

                <div className="input-group">

                    <FaEnvelope />

                    <input
                        type="email"
                        name="email"
                        value={formulario.email}
                        onChange={handleChange}
                        placeholder="Correo electrónico"
                        required
                    />

                </div>

                <div className="phone-row">

                    <PhoneInput
                        defaultCountry="mx"
                        value={formulario.phone}
                        onChange={handlePhoneChange}
                    />

                </div>

                <div className="input-group">

                    <FaDollarSign />

                    <input
                        type="number"
                        name="amount"
                        value={formulario.amount}
                        onChange={handleChange}
                        placeholder="Monto aproximado (USD)"
                        min="0"
                    />

                </div>

                <details className="comments-box">

                    <summary>
                        Agregar comentarios adicionales (Opcional)
                    </summary>

                    <textarea
                        name="description"
                        value={formulario.description}
                        onChange={handleChange}
                        placeholder="Describa brevemente su caso"
                    />

                </details>

                <button
                    type="submit"
                    disabled={enviando}
                >
                    {enviando
                        ? "Enviando..."
                        : "Solicitar Evaluación Gratuita"}
                </button>

                {mensajeFormulario && (

                    <p className="form-message">
                        {mensajeFormulario}
                    </p>

                )}

                <small className="secure">

                    <FaLock />

                    Información encriptada

                </small>

            </form>

        </section>


        {/* MEDIOS */}

        <section className="medios">

            <div className="medios-container">

                <h2>
                    Visto en Medios de Prestigio
                </h2>

                <div className="medios-grid">

                    <div className="medio">
                        <FaRegNewspaper />
                        <span>Forbes</span>
                    </div>

                    <div className="medio">
                        <FaRegNewspaper />
                        <span>El Universal</span>
                    </div>

                    <div className="medio">
                        <FaRegNewspaper />
                        <span>Expansión</span>
                    </div>

                    <div className="medio">
                        <FaRegNewspaper />
                        <span>Reforma</span>
                    </div>

                </div>

            </div>

        </section>


        {/* TIPOS DE FRAUDES */}

        <section className="areas-practica">

            <div className="section-header">

                <h2>
                    Tipos de Fraudes que Combatimos
                </h2>

                <p>
                    Analizamos diferentes modalidades de fraude financiero
                    y digital para ayudarte a comprender tu situación.
                </p>

            </div>

            <div className="areas-grid">

                {areas.map((area, index) => (

                    <article
                        className="area-card"
                        key={index}
                    >

                        <div className={`area-icon ${area.clase}`}>
                            {area.icon}
                        </div>

                        <h3>
                            {area.titulo}
                        </h3>

                        <p>
                            {area.texto}
                        </p>

                        <Link
                            to={area.ruta}
                            className="area-link"
                        >
                            Ver detalles
                            <FaArrowRight />
                        </Link>

                    </article>

                ))}

            </div>

        </section>


        {/* CÓMO LUCHAMOS POR TI */}

        <section className="proceso">

            <div className="section-header">

                <h2>
                    Cómo luchamos por ti
                </h2>

                <p>
                    Un proceso organizado para comprender tu situación
                    y definir las acciones más adecuadas.
                </p>

            </div>

            <div className="timeline">

                {pasos.map((paso, index) => (

                    <div
                        className="timeline-item"
                        key={index}
                    >

                        <div className="timeline-left">

                            <div className="timeline-circle">
                                {paso.icon}
                            </div>

                            {index !== pasos.length - 1 && (
                                <div className="timeline-line"></div>
                            )}

                        </div>

                        <div className="timeline-card">

                            <span className="step-number">
                                {paso.numero}
                            </span>

                            <h3>
                                {paso.titulo}
                            </h3>

                            <p>
                                {paso.texto}
                            </p>

                        </div>

                    </div>

                ))}

            </div>


            <div className="case-review">

                <FaCheckCircle />

                <div>

                    <h3>
                        Tu caso analizado sin costo
                    </h3>

                    <p>
                        Cuéntanos qué ocurrió. Revisaremos la información
                        inicial y te explicaremos las alternativas disponibles
                        para tu situación.
                    </p>

                </div>

            </div>

        </section>


        {/* POR QUÉ ELEGIRNOS */}

        <section className="porque">

            <div className="section-header">

                <h2>
                    ¿Por qué elegir a Interlex?
                </h2>

                <p>
                    Un enfoque especializado para analizar situaciones
                    de fraude y recuperación patrimonial.
                </p>

            </div>

            <div className="razones-grid">

                {razones.map((razon, index) => (

                    <article
                        className="razon-card"
                        key={index}
                    >

                        <div className="razon-icon">
                            {razon.icon}
                        </div>

                        <span className="razon-number">
                            {razon.numero}
                        </span>

                        <h3>
                            {razon.titulo}
                        </h3>

                        <p>
                            {razon.texto}
                        </p>

                    </article>

                ))}

            </div>

        </section>


        {/* LISTA DE ADVERTENCIA */}

        <section className="lista-alertas">

            <div className="section-header">

                <h2>
                    Lista de advertencia
                </h2>

                <p>
                    Alertas de fraude recientes
                </p>

            </div>

            <div className="alertas-box">

                <div className="alertas-title">
                    <span>
                        Entidades actualmente bajo investigación por nuestra firma
                    </span>
                </div>

                <div className="alertas-table">

                    <div className="alerta-row alerta-head">

                        <div>
                            Nombre de la entidad
                        </div>

                        <div>
                            Tipo de fraude
                        </div>

                        <div>
                            Fecha de reporte
                        </div>

                        <div>
                            Estado
                        </div>

                    </div>

                    {alertas.map((alerta, index) => (

                        <div
                            className="alerta-row"
                            key={index}
                        >

                            <div>
                                {alerta.entidad}
                            </div>

                            <div>
                                {alerta.fraude}
                            </div>

                            <div>
                                {alerta.fecha}
                            </div>

                            <div>

                                <span
                                    className={`estado ${
                                        alerta.estado === "Alerta activa"
                                            ? "lista-negra"
                                            : "precaucion"
                                    }`}
                                >
                                    {alerta.estado === "Alerta activa"
                                        ? "Lista negra"
                                        : "Precaución"}
                                </span>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>


        {/* TESTIMONIOS */}

        <section className="testimonios">

            <div className="section-header">

                <h2>
                    Historias de éxito
                </h2>

                <p>
                    Lo que dicen nuestros clientes
                </p>

            </div>

            <div className="testimonios-grid">

                {testimonios.map((testimonio, index) => (

                    <article
                        className="testimonio-card"
                        key={index}
                    >

                        <div className="testimonial-stars">

                            {Array.from({
                                length: testimonio.estrellas
                            }).map((_, estrella) => (

                                <FaStar
                                    key={estrella}
                                />

                            ))}

                        </div>

                        <p className="testimonial-text">
                            “{testimonio.texto}”
                        </p>

                        <h3>
                            {testimonio.nombre}
                        </h3>

                        <div className="testimonial-money">

                            <FaMoneyBillWave />

                            <span>
                                Recuperado: {testimonio.recuperado}
                            </span>

                        </div>

                    </article>

                ))}

            </div>

        </section>


        {/* FAQ */}

        <section className="faq">

            <div className="section-header">

                <h2>
                    Preguntas frecuentes
                </h2>

                <p>
                    Resolvemos algunas de las dudas más comunes antes
                    de iniciar una revisión.
                </p>

            </div>

            <div className="faq-container">

                {preguntas.map((item, index) => {

                    const abierta =
                        faqAbierta === index;

                    return (

                        <div
                            className={`faq-item ${
                                abierta
                                    ? "faq-open"
                                    : ""
                            }`}
                            key={index}
                        >

                            <button
                                type="button"
                                className="faq-question"
                                onClick={() =>
                                    toggleFaq(index)
                                }
                            >

                                <span>
                                    {item.pregunta}
                                </span>

                                <FaChevronDown
                                    className={
                                        abierta
                                            ? "faq-arrow-open"
                                            : ""
                                    }
                                />

                            </button>

                            {abierta && (

                                <div className="faq-answer">

                                    <p>
                                        {item.respuesta}
                                    </p>

                                </div>

                            )}

                        </div>

                    );

                })}

            </div>


            {/* TARJETA ASESORÍA */}

            <a
                href="#formulario"
                className="faq-contact"
            >

                <FaComments />

                <h3>
                    ¿No encontraste tu respuesta?
                </h3>

                <p>
                    Nuestros especialistas están listos para escuchar
                    tu caso específico.
                </p>

                <span className="faq-button">
                    <FaComments />
                    Quiero Asesoría Gratis
                </span>

            </a>

        </section>


        {/* CTA FINAL */}

        <section className="final-cta">

            <a
                href="#formulario"
                className="final-cta-content"
            >

                <div className="final-cta-text">

                    <h2>
                        No Dejes Que Se Salgan Con La Suya.
                    </h2>

                    <p>
                        Cada hora que esperas disminuye las posibilidades
                        de recuperar tus fondos. Nuestro equipo está listo
                        para revisar tu caso ahora mismo.
                    </p>

                    <span className="final-cta-button">
                        <FaGavel />
                        Iniciar Proceso de Recuperación
                    </span>

                </div>

                <div className="final-cta-hammer">
                    <FaGavel />
                </div>

            </a>

        </section>
          <a
    href="https://wa.me/5663820152"
    className="whatsapp-floating"
    target="_blank"
    rel="noopener noreferrer"
>
    <FaWhatsapp />
</a>
    </main>
);


}

export default Home;
