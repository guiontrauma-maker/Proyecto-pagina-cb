

import { useState } from "react";

import "../style/Servicios.css";

import {
    FaBalanceScale,
    FaGlobe,
    FaUniversity,
    FaShieldAlt,
    FaChartLine,
    FaBitcoin,
    FaUsers,
    FaGavel,
    FaSearch,
    FaCheckCircle,
    FaStar,
    FaCertificate,
    FaWhatsapp,
    FaFingerprint,
    FaLaptop,
    FaHeart,
    FaBuilding,
    FaLock
} from "react-icons/fa";


function Servicios() {

    const [faqActivo, setFaqActivo] = useState(null);

    const [formulario, setFormulario] = useState({
        fullName: "",
        email: "",
        phone: "",
        amount: "",
        description: ""
    });

    const [enviando, setEnviando] = useState(false);
const [mensaje, setMensaje] = useState("");
const [error, setError] = useState("");

    const abrirFaq = (index) => {

        setFaqActivo(
            faqActivo === index ? null : index
        );

    };


    const manejarCambio = (e) => {

        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });

    };


    const enviarFormulario = async (e) => {

        e.preventDefault();
setMensaje("");
setError("");
        if (enviando) return;

        setEnviando(true);

        try {

            const respuesta = await fetch(
    "https://ssm-backend-2b2k.onrender.com/api/evaluaciones",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        fullName: formulario.fullName,
                        email: formulario.email,
                        phone: formulario.phone,
                        fraudType: "Evaluación desde Servicios",
                        amount: formulario.amount,
                        currency: "MXN",
                        description: formulario.description
                    })
                }
            );


            const datos = await respuesta.json();


            if (!respuesta.ok) {

                throw new Error(
                    datos.message ||
                    "Error al enviar la solicitud."
                );

            }


            setMensaje(
    "Solicitud enviada correctamente. Nos pondremos en contacto contigo."
);


            setFormulario({
                fullName: "",
                email: "",
                phone: "",
                amount: "",
                description: ""
            });


        } catch (error) {

            console.error(error);

            setError(
    "No fue posible enviar la solicitud. Intenta nuevamente."
);
        } finally {

            setEnviando(false);

        }

    };


    return (

        <main className="servicios-page">


            {/* HERO */}

            <section className="servicios-hero">

                <div className="servicios-hero-content">

                    <h1>

                        <span className="titulo-pequeno">
                            Nuestros Servicios:
                        </span>

                        <span className="titulo-principal">
                            EXPERTOS EN RECUPERACIÓN DE ACTIVOS
                        </span>

                    </h1>


                    <p>
                        Entendemos el impacto devastador del fraude financiero.
                        Nuestro equipo combina estrategia legal, investigación
                        financiera y tecnología forense para ayudarte a recuperar
                        lo que te pertenece.
                    </p>


                    <div className="hero-buttons">

                        <a href="#areas-practica">

                            <button>
                                Explora nuestros servicios
                            </button>

                        </a>


                        <a href="#testimonios">

                            <button className="outline-btn">
                                Ver casos de éxito
                            </button>

                        </a>

                    </div>

                </div>

            </section>


            {/* RECONOCIDOS */}

            <section className="reconocidos-section">

                <h2>
                    Reconocidos por nuestra efectividad en
                </h2>


                <div className="reconocidos-grid">

                    <div>
                        <FaBalanceScale />
                        <span>
                            Tribunales Federales
                        </span>
                    </div>


                    <div>
                        <FaGlobe />
                        <span>
                            Arbitraje Internacional
                        </span>
                    </div>


                    <div>
                        <FaUniversity />
                        <span>
                            CONDUSEF
                        </span>
                    </div>


                    <div>
                        <FaShieldAlt />
                        <span>
                            CyberForensics
                        </span>
                    </div>


                    <div>
                        <FaChartLine />
                        <span>
                            Recuperación Forex y CFDs
                        </span>
                    </div>

                </div>

            </section>


            {/* AREAS DE PRACTICA */}

            <section
                className="areas-practica"
                id="areas-practica"
            >

                <div className="section-header">

                    <h2>
                        Áreas de práctica
                    </h2>

                    <p>
                        Soluciones especializadas para distintos tipos de fraude financiero.
                    </p>

                </div>


                <div className="areas-grid">


                    <article className="area-card fraude-bancario">

                        <div className="area-icon">
                            <FaUniversity />
                        </div>

                        <h3>
                            Fraudes Bancarios
                        </h3>

                        <p>
                            Phishing, transferencias no reconocidas y operaciones
                            bancarias fraudulentas.
                        </p>

                        <a href="/servicios/fraudes-bancarios">
                            Ver detalles →
                        </a>

                    </article>


                    <article className="area-card fraude-digital">

                        <div className="area-icon">
                            <FaLaptop />
                        </div>

                        <h3>
                            Fraudes Digitales
                        </h3>

                        <p>
                            Investigación de fraudes cometidos mediante plataformas
                            digitales.
                        </p>

                        <a href="/servicios/fraudes-digitales">
                            Ver detalles →
                        </a>

                    </article>


                    <article className="area-card identidad">

                        <div className="area-icon">
                            <FaFingerprint />
                        </div>

                        <h3>
                            Robo de Identidad
                        </h3>

                        <p>
                            Análisis y orientación ante uso indebido de información personal.
                        </p>

                        <a href="/servicios/robo-identidad">
                            Ver detalles →
                        </a>

                    </article>


                    <article className="area-card forex">

                        <div className="area-icon">
                            <FaChartLine />
                        </div>

                        <h3>
                            Estafas de Inversión
                        </h3>

                        <p>
                            Recuperación de activos relacionados con brokers fraudulentos,
                            Forex y CFDs.
                        </p>

                        <a href="/servicios/estafas-inversion">
                            Ver detalles →
                        </a>

                    </article>


                    <article className="area-card romanticas">

                        <div className="area-icon">
                            <FaHeart />
                        </div>

                        <h3>
                            Estafas Románticas
                        </h3>

                        <p>
                            Investigación de engaños sentimentales y redes internacionales.
                        </p>

                        <a href="/servicios/estafas-romanticas">
                            Ver detalles →
                        </a>

                    </article>


                    <article className="area-card piramidales">

                        <div className="area-icon">
                            <FaUsers />
                        </div>

                        <h3>
                            Esquemas Piramidales
                        </h3>

                        <p>
                            Acciones colectivas contra fraudes empresariales y Ponzi.
                        </p>

                        <a href="/servicios/estafas-piramidales">
                            Ver detalles →
                        </a>

                    </article>


                </div>

            </section>


            {/* DETALLE FOREX */}

            <section className="servicio-detalle">

                <div className="detalle-left">

                    <div className="titulo-servicio">

                        <div className="icono-titulo forex-icono">
                            <FaChartLine />
                        </div>

                        <h2>
                            Recuperación en Forex y CFDs
                        </h2>

                    </div>


                    <div className="detalle-card forex-card">

                        <FaSearch />

                        <h3>
                            El Impacto
                        </h3>

                        <p>
                            Los estafadores manipulan plataformas como MetaTrader
                            para mostrar ganancias falsas. Cuando la víctima intenta
                            retirar su dinero aparecen excusas, tarifas ocultas y
                            finalmente desaparecen.
                        </p>

                    </div>


                    <div className="detalle-card forex-card">

                        <FaGavel />

                        <h3>
                            Nuestra Estrategia Legal
                        </h3>

                        <ul>

                            <li>
                                Rastreo corporativo de la entidad responsable.
                            </li>

                            <li>
                                Presión bancaria mediante normativas AML.
                            </li>

                            <li>
                                Chargebacks estratégicos y documentación técnica.
                            </li>

                        </ul>

                    </div>

                </div>


                <div className="detalle-right">

                    <div className="caso-card">

                        <FaCheckCircle />

                        <h3>
                            Caso de éxito
                        </h3>

                        <strong>
                            $45,000 USD Recuperados
                        </strong>

                        <p>
                            Recuperación mediante investigación financiera
                            y estrategia internacional.
                        </p>

                    </div>


                    <div className="mini-card">

                        <h3>
                            Brokers en la mira
                        </h3>

                        <p>
                            OmegaPro, Warren Bowie & Smith y otros brokers
                            no regulados.
                        </p>

                    </div>

                </div>

            </section>


            {/* CRIPTOMONEDAS */}

            <section className="servicio-detalle cripto-section">

                <div className="detalle-left">

                    <div className="titulo-servicio">

                        <div className="icono-titulo cripto-icono">
                            <FaBitcoin />
                        </div>

                        <h2>
                            Fraudes con Criptomonedas
                        </h2>

                    </div>


                    <div className="detalle-card cripto-card">

                        <FaBitcoin />

                        <h3>
                            El Desafío Técnico
                        </h3>

                        <p>
                            La blockchain permite rastrear movimientos digitales.
                            Aunque parezca imposible recuperar activos, muchos
                            fondos terminan pasando por exchanges regulados.
                        </p>

                    </div>


                    <div className="detalle-card cripto-card">

                        <FaSearch />

                        <h3>
                            Rastreo y Congelamiento
                        </h3>

                        <ul>

                            <li>
                                Mapeo de transacciones blockchain.
                            </li>

                            <li>
                                Seguimiento de billeteras digitales.
                            </li>

                            <li>
                                Solicitud de congelamiento de fondos.
                            </li>

                        </ul>

                    </div>

                </div>


                <div className="detalle-right">

                    <div className="caso-card">

                        <h3>
                            Resultado reciente
                        </h3>

                        <strong>
                            3.5 BTC Recuperados
                        </strong>

                        <p>
                            Localización de activos digitales mediante
                            investigación blockchain.
                        </p>

                    </div>


                    <div className="mini-card colaboracion">

                        <FaShieldAlt />

                        <p>
                            Colaboramos con departamentos de cumplimiento
                            de exchanges globales.
                        </p>

                    </div>

                </div>

            </section>


            {/* ESQUEMAS PIRAMIDALES */}

            <section className="servicio-detalle">

                <div className="detalle-left">

                    <div className="titulo-servicio">

                        <div className="icono-titulo ponzi-icono">
                            <FaUsers />
                        </div>

                        <h2>
                            Esquemas Piramidales (Ponzi)
                        </h2>

                    </div>


                    <div className="detalle-card piramidal-card">

                        <FaUsers />

                        <h3>
                            La Traición de Confianza
                        </h3>

                        <p>
                            Estas estafas afectan patrimonio, relaciones familiares
                            y generan conflictos legales entre afectados.
                        </p>

                    </div>


                    <div className="detalle-card piramidal-card">

                        <FaGavel />

                        <h3>
                            El Poder de la Acción Colectiva
                        </h3>

                        <ul>

                            <li>
                                Denuncias penales masivas.
                            </li>

                            <li>
                                Aseguramiento de bienes.
                            </li>

                            <li>
                                Representación colectiva.
                            </li>

                        </ul>

                    </div>

                </div>


                <div className="detalle-right">

                    <div className="caso-card">

                        <h3>
                            Acción en curso
                        </h3>

                        <strong>
                            +150 afectados representados
                        </strong>

                        <p>
                            Estrategias legales colectivas para recuperar
                            patrimonio.
                        </p>

                    </div>


                    <div className="mini-card">

                        <FaBalanceScale />

                        <p>
                            Litigio Civil y Mercantil
                        </p>

                    </div>

                </div>

            </section>


            {/* OTRAS ESPECIALIDADES */}

            <section className="otras-especialidades">

                <div className="section-header">

                    <h2>
                        Otras Áreas de Especialización
                    </h2>

                    <p>
                        Estrategias adaptadas para diferentes tipos de fraude.
                    </p>

                </div>


                <div className="especialidades-grid">


                    <article className="especialidad-card broker">

                        <FaBuilding />

                        <h3>
                            Brokers Fraudulentos
                        </h3>

                        <p>
                            Analizamos brokers sin regulación adecuada y
                            desarrollamos estrategias de recuperación.
                        </p>

                        <a href="/servicios/estafas-inversion">
                            Consultar sobre mi Broker →
                        </a>

                    </article>


                    <article className="especialidad-card romantica">

                        <FaHeart />

                        <h3>
                            Estafas Románticas
                        </h3>

                        <p>
                            Utilizamos investigación digital para identificar
                            redes detrás de estos engaños.
                        </p>

                        <a href="/servicios/estafas-romanticas">
                            Solicitar investigación →
                        </a>

                    </article>


                    <article className="especialidad-card bancaria-grande">

                        <FaUniversity />

                        <h3>
                            Fraude Bancario y SPEI
                        </h3>

                        <p>
                            Atendemos phishing, vishing y cargos no reconocidos
                            ante instituciones financieras.
                        </p>


                        <div className="cargo-box">

                            <h4>
                                Cargos No Reconocidos
                            </h4>

                            <p>
                                Analizamos movimientos desconocidos y alternativas
                                de reclamación.
                            </p>

                        </div>


                        <a href="/contacto">
                            Reportar ahora →
                        </a>

                    </article>

                </div>

            </section>


            {/* COMO LUCHAMOS */}

            <section className="como-luchamos">

                <div className="section-header">

                    <h2>
                        Cómo luchamos por ti
                    </h2>

                    <p>
                        Un proceso diseñado para analizar, investigar y actuar.
                    </p>

                </div>


                <div className="proceso-linea">


                    <div className="paso-proceso">

                        <span>
                            <FaSearch />
                        </span>

                        <div>

                            <h3>
                                Evaluamos tu caso
                            </h3>

                            <p>
                                Analizamos la información inicial y conocemos
                                los detalles de tu situación.
                            </p>

                        </div>

                    </div>


                    <div className="paso-proceso">

                        <span>
                            <FaShieldAlt />
                        </span>

                        <div>

                            <h3>
                                Investigamos evidencia
                            </h3>

                            <p>
                                Revisamos documentos, movimientos y pruebas
                                relacionadas con el fraude.
                            </p>

                        </div>

                    </div>


                    <div className="paso-proceso">

                        <span>
                            <FaGavel />
                        </span>

                        <div>

                            <h3>
                                Definimos una estrategia
                            </h3>

                            <p>
                                Seleccionamos las acciones legales y financieras
                                más adecuadas.
                            </p>

                        </div>

                    </div>


                    <div className="paso-proceso">

                        <span>
                            <FaCheckCircle />
                        </span>

                        <div>

                            <h3>
                                Damos seguimiento
                            </h3>

                            <p>
                                Acompañamos el proceso hasta obtener resultados.
                            </p>

                        </div>

                    </div>

                </div>


                <div className="garantia-box">

                    <div className="garantia-icon">
                        <FaCertificate />
                    </div>


                    <div>

                        <h3>
                            Garantía si no ganamos no cobramos
                        </h3>

                        <p>
                            Trabajamos enfocados en resultados y recuperación
                            patrimonial.
                        </p>

                    </div>


                    <a href="#formulario-servicios">
                        Solicitar evaluación
                    </a>

                </div>

            </section>


            {/* TESTIMONIOS */}

            <section
                className="testimonios-servicios"
                id="testimonios"
            >

                <div className="estadisticas-testimonios">

                    <span>
                        Resultados comprobados
                    </span>

                    <span>
                        +500 casos exitosos
                    </span>

                </div>


                <div className="section-header">

                    <h2>
                        Lo que Dicen Nuestros Clientes
                    </h2>

                </div>


                <div className="testimonios-grid">


                    <article className="testimonio-card">

                        <div className="stars">

                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />

                        </div>

                        <p>
                            "Recibimos orientación clara y acompañamiento
                            durante todo el proceso."
                        </p>

                        <strong>
                            -Maria G., Guadalajara
                        </strong>

                    </article>


                    <article className="testimonio-card">

                        <div className="stars">

                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />

                        </div>

                        <p>
                            "Nos ayudaron a entender las opciones disponibles
                            para recuperar nuestro patrimonio."
                        </p>

                        <strong>
                            -Alfonso T., Ciudad de México
                        </strong>

                    </article>


                    <article className="testimonio-card">

                        <div className="stars">

                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />

                        </div>

                        <p>
                            "El seguimiento profesional nos dio tranquilidad
                            durante todo el procedimiento."
                        </p>

                        <strong>
                            -David R., Puebla
                        </strong>

                    </article>


                </div>

            </section>


            {/* FORMULARIO */}

            <section
                className="formulario-servicios"
                id="formulario-servicios"
            >

                <div className="formulario-container">


                    <div className="formulario-info">

                        <h2>
                            Recupere su patrimonio
                        </h2>

                        <p>
                            Cuéntenos su caso. Nuestro equipo analizará
                            su situación y las alternativas disponibles
                            para iniciar una estrategia de recuperación.
                        </p>


                        <div className="info-item">

                            <FaShieldAlt />

                            <span>
                                Evaluación confidencial de su caso.
                            </span>

                        </div>


                        <div className="info-item">

                            <FaCheckCircle />

                            <span>
                                Estrategias personalizadas.
                            </span>

                        </div>

                    </div>


                    {/* FORMULARIO CONECTADO A MONGODB */}

                    <div className="formulario-box">

                        <form onSubmit={enviarFormulario}>


                            <div className="form-row">

                                <input
                                    type="text"
                                    name="fullName"
                                    placeholder="Nombre completo"
                                    value={formulario.fullName}
                                    onChange={manejarCambio}
                                    required
                                />


                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Correo electrónico"
                                    value={formulario.email}
                                    onChange={manejarCambio}
                                    required
                                />

                            </div>


                            <div className="form-row">

                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Número telefónico"
                                    value={formulario.phone}
                                    onChange={manejarCambio}
                                />


                                <input
                                    type="number"
                                    name="amount"
                                    placeholder="Monto estimado afectado"
                                    value={formulario.amount}
                                    onChange={manejarCambio}
                                    min="0"
                                />

                            </div>


                            <textarea
                                name="description"
                                placeholder="Comentario (opcional)"
                                value={formulario.description}
                                onChange={manejarCambio}
                            ></textarea>


                           <button
    type="submit"
    disabled={enviando}
>
    {enviando
        ? "Enviando..."
        : "Enviar solicitud"
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


                            <div className="seguridad">

                                <FaLock />

                                <p>
                                    Información encriptada y protegida.
                                    Sus datos son tratados con estricta confidencialidad.
                                </p>

                            </div>


                        </form>

                    </div>


                </div>

            </section>


            {/* FAQ */}

            <section className="faq-servicios">

                <div className="section-header">

                    <h2>
                        Preguntas frecuentes
                    </h2>

                </div>


                <div className="faq-list">


                    {[

                        {
                            pregunta: "¿Pueden recuperar mi dinero?",
                            respuesta: "Cada caso es diferente. Primero analizamos la información disponible para determinar las alternativas posibles."
                        },

                        {
                            pregunta: "¿Cuánto tarda un proceso?",
                            respuesta: "El tiempo depende del tipo de fraude, instituciones involucradas y complejidad del caso."
                        },

                        {
                            pregunta: "¿Qué información necesito?",
                            respuesta: "Transferencias, comprobantes, conversaciones y cualquier evidencia relacionada con el fraude."
                        },

                        {
                            pregunta: "¿Atienden casos internacionales?",
                            respuesta: "Sí, analizamos casos con componentes nacionales e internacionales."
                        }

                    ].map((faq, index) => (

                        <div
                            className="faq-item"
                            key={index}
                        >

                            <button
                                type="button"
                                onClick={() => abrirFaq(index)}
                            >

                                {faq.pregunta}

                                <span>
                                    {faqActivo === index ? "-" : "+"}
                                </span>

                            </button>


                            {faqActivo === index && (

                                <p>
                                    {faq.respuesta}
                                </p>

                            )}

                        </div>

                    ))}


                </div>

            </section>


            {/* WHATSAPP FLOTANTE */}

            <a
                href="https://wa.me/5663820152"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float"
            >

                <FaWhatsapp />

            </a>


        </main>

    );

}


export default Servicios;




