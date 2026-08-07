
import React, { useState } from "react";
import {
    FaSearch,
    FaWhatsapp,
    FaShieldAlt,
    FaGlobe,
    FaBalanceScale
} from "react-icons/fa";

import "../style/ListaNegraBrokers.css";

const brokersData = [

    {
        nombre: "Global Trade FX",
        categoria: "Broker No Regulado",
        estado: "lista",
        fecha: "15 Marzo 2026"
    },

    {
        nombre: "CryptoMina MX",
        categoria: "Esquema Ponzi",
        estado: "lista",
        fecha: "22 Febrero 2026"
    },

    {
        nombre: "Support-Banamex.com",
        categoria: "Sitio Phishing",
        estado: "lista",
        fecha: "02 Abril 2026"
    },

    {
        nombre: "Go4Rex",
        categoria: "Broker No Regulado",
        estado: "lista",
        fecha: "18 Enero 2026"
    },

    {
        nombre: "70Trades",
        categoria: "Broker No Regulado",
        estado: "lista",
        fecha: "10 Marzo 2026"
    },

    {
        nombre: "AMG GPT",
        categoria: "Esquema de Inversión",
        estado: "lista",
        fecha: "28 Abril 2026"
    },

    {
        nombre: "Forex Blend",
        categoria: "Broker Forex",
        estado: "lista",
        fecha: "07 Mayo 2026"
    },

    {
        nombre: "FORTIS IM TRADE",
        categoria: "Plataforma Trading",
        estado: "lista",
        fecha: "20 Marzo 2026"
    },

    {
        nombre: "Omega Pro",
        categoria: "MLM / Cripto",
        estado: "lista",
        fecha: "14 Enero 2026"
    },

    {
        nombre: "Generación Zoe",
        categoria: "Esquema Ponzi",
        estado: "lista",
        fecha: "11 Febrero 2026"
    },

    {
        nombre: "eToro",
        categoria: "Broker Internacional",
        estado: "precaucion",
        fecha: "05 Junio 2026"
    },

    {
        nombre: "IQ Option",
        categoria: "Opciones Binarias",
        estado: "precaucion",
        fecha: "12 Mayo 2026"
    },

    {
        nombre: "XM Global",
        categoria: "Forex / CFDs",
        estado: "precaucion",
        fecha: "08 Junio 2026"
    },

    {
        nombre: "Exness",
        categoria: "Forex / CFDs",
        estado: "precaucion",
        fecha: "16 Mayo 2026"
    },

    {
        nombre: "Plus500",
        categoria: "CFDs",
        estado: "precaucion",
        fecha: "01 Junio 2026"
    }

];

function ListaNegraBrokers() {

    const [busqueda, setBusqueda] = useState("");

    const [filtro, setFiltro] = useState("todos");

    // ================================
    // DATOS DEL FORMULARIO
    // ================================

    const [formulario, setFormulario] = useState({
        fullName: "",
        email: "",
        phone: "",
        amount: "",
        description: ""
    });

    const [enviando, setEnviando] = useState(false);

    const [mensaje, setMensaje] = useState("");

    // ================================
    // CAMBIAR CAMPOS
    // ================================

    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormulario({
            ...formulario,
            [name]: value
        });

    };

    // ================================
    // ENVIAR A MONGODB
    // ================================

    const handleSubmit = async (e) => {

        e.preventDefault();

        setEnviando(true);
        setMensaje("");

        try {

            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/evaluaciones`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({

                        fullName: formulario.fullName,

                        email: formulario.email,

                        phone: formulario.phone,

                        fraudType: "Lista Negra de Brokers",

                        amount: Number(formulario.amount) || 0,

                        currency: "USD",

                        description: formulario.description,
                        origin: "Lista Negra de Brokers"

                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {

                throw new Error(
                    data.message || "No se pudo enviar la consulta."
                );

            }

            setMensaje(
                "Consulta enviada correctamente. Revisaremos la información proporcionada."
            );

            setFormulario({
                fullName: "",
                email: "",
                phone: "",
                amount: "",
                description: ""
            });

        } catch (error) {

            console.error("Error al enviar formulario:", error);

            setMensaje(
                "No fue posible enviar la consulta. Verifica que el servidor esté funcionando."
            );

        } finally {

            setEnviando(false);

        }

    };

    // ================================
    // FILTRO DE BROKERS
    // ================================

    const brokersFiltrados = brokersData.filter((broker) => {

        const nombreCoincide = broker.nombre
            .toLowerCase()
            .includes(busqueda.toLowerCase());

        const filtroCoincide =
            filtro === "todos" ||
            broker.estado === filtro;

        return nombreCoincide && filtroCoincide;

    });

    return (

        <main className="lista-brokers">

            {/* HERO */}

            <section className="broker-hero">

                <div className="hero-contenido">

                    <h1>
                        Lista Negra de Brokers
                    </h1>

                    <p>
                        Consulte nuestra base de datos de entidades financieras
                        identificadas con señales de riesgo. Proteja su patrimonio
                        verificando antes de invertir.
                    </p>

                </div>

            </section>


            {/* BUSCADOR */}

            <section className="buscador-section">

                <h2>
                    Buscar Broker
                </h2>

                <div className="buscador-box">

                    <FaSearch className="icon-search" />

                    <input
                        type="text"
                        placeholder="Escribe el nombre del broker"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                    />

                </div>

                <button
                    className="reportar-btn"
                    onClick={() =>
                        document
                            .getElementById("reporte")
                            .scrollIntoView({
                                behavior: "smooth"
                            })
                    }
                >
                    Reportar Broker
                </button>

            </section>


            {/* FILTROS */}

            <section className="filtros-brokers">

                <button
                    className={filtro === "todos" ? "activo" : ""}
                    onClick={() => setFiltro("todos")}
                >
                    Todos
                </button>

                <button
                    className={filtro === "lista" ? "activo" : ""}
                    onClick={() => setFiltro("lista")}
                >
                    Lista Negra
                </button>

                <button
                    className={filtro === "precaucion" ? "activo" : ""}
                    onClick={() => setFiltro("precaucion")}
                >
                    Precaución
                </button>

            </section>


            {/* TARJETAS */}

            <section className="tarjetas-brokers">

                {brokersFiltrados.map((broker, index) => (

                    <div
                        className={`broker-card ${broker.estado}`}
                        key={index}
                    >

                        <div className="estado-broker">

                            {broker.estado === "lista" ? (

                                <span className="badge-lista">
                                    Lista Negra
                                </span>

                            ) : (

                                <span className="badge-precaucion">
                                    Precaución
                                </span>

                            )}

                        </div>

                        <h3>
                            {broker.nombre}
                        </h3>

                        <h4>
                            {broker.categoria}
                        </h4>

                        <p className="fecha-reporte">

                            Reportado:

                            <strong>
                                {broker.fecha}
                            </strong>

                        </p>

                        <p>

                            {broker.estado === "lista"

                                ? "Entidad identificada con señales de riesgo."

                                : "Se recomienda verificar regulación antes de invertir."

                            }

                        </p>

                    </div>

                ))}

            </section>


            {/* PREGUNTAS FRECUENTES */}

            <section className="faq-brokers">

                <h2>
                    Preguntas Frecuentes sobre Brokers
                </h2>

                <details>

                    <summary>
                        ¿Por qué hay brokers en "Precaución"?
                    </summary>

                    <p>
                        Algunas plataformas operan internacionalmente y ofrecen
                        servicios financieros de alto riesgo. Antes de invertir,
                        recomendamos verificar su regulación y autorización para
                        operar en su país.
                    </p>

                </details>


                <details>

                    <summary>
                        ¿Cómo puedo denunciar un broker fraudulento?
                    </summary>

                    <p>
                        Puede enviarnos la información disponible de la entidad
                        para realizar una revisión preventiva de antecedentes,
                        licencias y posibles alertas regulatorias.
                    </p>

                </details>


                <details>

                    <summary>
                        ¿Debo pagar impuestos por inversiones en el extranjero?
                    </summary>

                    <p>
                        Las obligaciones fiscales dependen del país de residencia
                        y del tipo de inversión realizada. Recomendamos recibir
                        asesoría especializada.
                    </p>

                </details>


                <details>

                    <summary>
                        ¿Es seguro operar con brokers no regulados en México?
                    </summary>

                    <p>
                        Operar con entidades sin regulación comprobable aumenta
                        significativamente el riesgo de fraude y de pérdida
                        patrimonial.
                    </p>

                </details>

            </section>


            {/* FORMULARIO */}

            <section
                className="reporte-broker"
                id="reporte"
            >

                <div className="reporte-info">

                    <h2>
                        ¿Su broker no aparece aquí?
                    </h2>

                    <p>
                        Nuestra lista negra se actualiza mensualmente.
                        Si tiene sospechas sobre una entidad financiera,
                        podemos realizar una verificación preventiva
                        de antecedentes regulatorios.
                    </p>


                    <div className="info-item">

                        <FaShieldAlt />

                        <div>

                            <h4>
                                Verificación de licencia
                            </h4>

                            <p>
                                Comprobamos autorizaciones y registros.
                            </p>

                        </div>

                    </div>


                    <div className="info-item">

                        <FaGlobe />

                        <div>

                            <h4>
                                Rastreo de IP y dominios
                            </h4>

                            <p>
                                Analizamos antecedentes digitales.
                            </p>

                        </div>

                    </div>


                    <div className="info-item">

                        <FaBalanceScale />

                        <div>

                            <h4>
                                Historial legal
                            </h4>

                            <p>
                                Revisamos reportes y alertas públicas.
                            </p>

                        </div>

                    </div>


                    <div className="linea-directa">

                        <p>
                            Línea directa
                        </p>

                        <h3>
                            5559032021
                        </h3>

                        <span>
                            recuperacionasistente@gmail.com
                        </span>

                    </div>

                </div>


                {/* FORMULARIO CONECTADO A MONGODB */}

                <form
                    className="formulario-broker"
                    onSubmit={handleSubmit}
                >

                    <input
                        type="text"
                        name="fullName"
                        placeholder="Nombre completo"
                        value={formulario.fullName}
                        onChange={handleChange}
                        required
                    />


                    <input
                        type="email"
                        name="email"
                        placeholder="Correo electrónico"
                        value={formulario.email}
                        onChange={handleChange}
                        required
                    />


                    <input
                        type="tel"
                        name="phone"
                        placeholder="Teléfono"
                        value={formulario.phone}
                        onChange={handleChange}
                        required
                    />


                    <input
                        type="number"
                        name="amount"
                        placeholder="Monto aproximado perdido"
                        value={formulario.amount}
                        onChange={handleChange}
                    />


                    <textarea
                        name="description"
                        placeholder="Describa brevemente su caso"
                        value={formulario.description}
                        onChange={handleChange}
                    ></textarea>


                    <button
                        type="submit"
                        disabled={enviando}
                    >

                        {enviando
                            ? "Enviando..."
                            : "Enviar Consulta"
                        }

                    </button>


                    {mensaje && (

                        <p className="mensaje-formulario">
                            {mensaje}
                        </p>

                    )}


                    <small>

                        Información encriptada mediante cifrado AES-256.

                        Tus datos son tratados de forma confidencial.

                    </small>

                </form>

            </section>


            {/* BOTÓN FLOTANTE WHATSAPP */}

            <a
                href="https://wa.me/5559032021"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float"
            >

                <FaWhatsapp />

            </a>

        </main>

    );

}

export default ListaNegraBrokers;





