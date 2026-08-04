import { useState } from "react";
import { Link } from "react-router-dom";

import {
    FaPhoneAlt,
    FaBars,
    FaTimes,
    FaUniversity,
    FaLaptopCode,
    FaUserShield,
    FaChartLine,
    FaHeart,
    FaQuestionCircle,
    FaExclamationTriangle
} from "react-icons/fa";


function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [serviciosOpen, setServiciosOpen] = useState(false);
    const [recursosOpen, setRecursosOpen] = useState(false);


    const cerrarMenu = () => {

        setMenuOpen(false);
        setServiciosOpen(false);
        setRecursosOpen(false);

    };


    const toggleServicios = () => {

        setServiciosOpen(!serviciosOpen);

        setRecursosOpen(false);

    };


    const toggleRecursos = () => {

        setRecursosOpen(!recursosOpen);

        setServiciosOpen(false);

    };


    return (

        <header className="navbar">


            {/* =====================================
                MARCA
            ====================================== */}

            <div className="navbar-brand">


                <Link
                    to="/"
                    className="logo-image"
                    onClick={cerrarMenu}
                >

                    <img
                        src="/images/logo.jpg"
                        alt="Logo SSM"
                    />

                </Link>


                <Link
                    to="/"
                    className="logo"
                    onClick={cerrarMenu}
                >

                    SSM | Asesoría Legal y Recuperación Patrimonial

                </Link>


            </div>



            {/* =====================================
                MENU PRINCIPAL
            ====================================== */}

            <nav
                className={`navbar-links ${
                    menuOpen ? "menu-open" : ""
                }`}
            >


                {/* INICIO */}

                <Link
                    to="/"
                    onClick={cerrarMenu}
                >

                    Inicio

                </Link>



                {/* NOSOTROS */}

                <Link
                    to="/nosotros"
                    onClick={cerrarMenu}
                >

                    Nosotros

                </Link>



                {/* =================================
                    SERVICIOS
                ================================== */}

                <div
                    className={`navbar-dropdown ${
                        serviciosOpen ? "dropdown-open" : ""
                    }`}
                >


                    <button
                        type="button"
                        className="dropdown-trigger"
                        onClick={toggleServicios}
                    >

                        Servicios

                        <span className="dropdown-arrow">
                            ▾
                        </span>

                    </button>



                    <div className="dropdown-panel servicios-panel">


                        {/* 1 */}

                        <Link
                            to="/servicios/fraudes-bancarios"
                            onClick={cerrarMenu}
                            className="dropdown-option"
                        >

                            <span className="dropdown-icon icon-bancario">

                                <FaUniversity />

                            </span>


                            <span className="dropdown-text">

                                Fraudes Bancarios

                            </span>

                        </Link>



                        {/* 2 */}

                        <Link
                            to="/servicios/fraudes-digitales"
                            onClick={cerrarMenu}
                            className="dropdown-option"
                        >

                            <span className="dropdown-icon icon-digital">

                                <FaLaptopCode />

                            </span>


                            <span className="dropdown-text">

                                Fraudes Digitales

                            </span>

                        </Link>



                        {/* 3 */}

                        <Link
                            to="/servicios/robo-identidad"
                            onClick={cerrarMenu}
                            className="dropdown-option"
                        >

                            <span className="dropdown-icon icon-identidad">

                                <FaUserShield />

                            </span>


                            <span className="dropdown-text">

                                Robo de Identidad

                            </span>

                        </Link>



                        {/* 4 */}

                        <Link
                            to="/servicios/estafas-inversion"
                            onClick={cerrarMenu}
                            className="dropdown-option"
                        >

                            <span className="dropdown-icon icon-inversion">

                                <FaChartLine />

                            </span>


                            <span className="dropdown-text">

                                Estafas de Inversión

                            </span>

                        </Link>



                        {/* 5 */}

                        <Link
                            to="/servicios/estafas-romanticas"
                            onClick={cerrarMenu}
                            className="dropdown-option"
                        >

                            <span className="dropdown-icon icon-romanticas">

                                <FaHeart />

                            </span>


                            <span className="dropdown-text">

                                Estafas Románticas

                            </span>

                        </Link>



                        {/* VER TODOS */}

                        <Link
                            to="/servicios"
                            onClick={cerrarMenu}
                            className="dropdown-all"
                        >

                            <span>
                                Ver todos los servicios
                            </span>

                            <span className="dropdown-all-arrow">
                                →
                            </span>

                        </Link>


                    </div>

                </div>



                {/* =================================
                    RECURSOS
                ================================== */}

                <div
                    className={`navbar-dropdown ${
                        recursosOpen ? "dropdown-open" : ""
                    }`}
                >


                    <button
                        type="button"
                        className="dropdown-trigger"
                        onClick={toggleRecursos}
                    >

                        Recursos

                        <span className="dropdown-arrow">
                            ▾
                        </span>

                    </button>



                    <div className="dropdown-panel recursos-panel">


                        {/* PREGUNTAS */}

                        <Link
                            to="/preguntas-frecuentes"
                            onClick={cerrarMenu}
                            className="dropdown-option"
                        >

                            <span className="dropdown-icon icon-preguntas">

                                <FaQuestionCircle />

                            </span>


                            <span className="dropdown-text">

                                Preguntas Frecuentes

                            </span>

                        </Link>



                        {/* BROKERS */}

                        <Link
                            to="/lista-negra-brokers"
                            onClick={cerrarMenu}
                            className="dropdown-option"
                        >

                            <span className="dropdown-icon icon-brokers">

                                <FaExclamationTriangle />

                            </span>


                            <span className="dropdown-text">

                                Lista Negra de Brokers

                            </span>

                        </Link>


                    </div>

                </div>



                {/* CONTACTO */}

                <Link
                    to="/contacto"
                    onClick={cerrarMenu}
                >

                    Contacto

                </Link>


            </nav>



            {/* =====================================
                CONSULTA
            ====================================== */}

            <div className="navbar-action">


                <a
                    href="tel:+5663820152"
                    className="call-button"
                >

                    <FaPhoneAlt />

                    <span>
                        Consulta
                    </span>

                </a>


            </div>



            {/* =====================================
                HAMBURGUESA
            ====================================== */}

            <button
                type="button"
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={
                    menuOpen
                        ? "Cerrar menú"
                        : "Abrir menú"
                }
            >

                {menuOpen
                    ? <FaTimes />
                    : <FaBars />
                }

            </button>


        </header>

    );

}


export default Navbar;




