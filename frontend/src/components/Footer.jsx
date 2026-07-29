
import { Link } from "react-router-dom";
import {
    FaHome,
    FaUsers,
    FaQuestionCircle,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaEnvelope
} from "react-icons/fa";

import "../style/Footer.css";

function Footer() {

    return (

        <footer className="footer">

            <div className="footer-container">

                {/* EMPRESA */}

                <div className="footer-column footer-brand">

                    <img
                        src="/images/logo.jpg"
                        alt="Logo SSM"
                        className="footer-logo"
                    />

                    <p>
                        Asesoría y acompañamiento especializado
                        para la recuperación patrimonial.
                    </p>

                </div>


                {/* SERVICIOS */}

                <div className="footer-column">

                    <h3>Servicios</h3>

                    <ul>

                        <li>
                            <Link to="/fraudes-digitales">
                                Fraudes Digitales
                            </Link>
                        </li>

                        <li>
                            <Link to="/robo-identidad">
                                Robo de Identidad
                            </Link>
                        </li>

                        <li>
                            <Link to="/fraude-bancario">
                                Fraude Bancario
                            </Link>
                        </li>

                        <li>
                            <Link to="/fraude-piramidal">
                                Fraude Piramidal
                            </Link>
                        </li>

                        <li>
                            <Link to="/estafas-inversion">
                                Estafas de Inversión
                            </Link>
                        </li>

                        <li>
                            <Link to="/estafas-romanticas">
                                Estafas Románticas
                            </Link>
                        </li>

                        <li>
                            <Link to="/lista-negra-brokers">
                                Lista Negra de Brokers
                            </Link>
                        </li>

                    </ul>

                </div>


                {/* ENLACES */}

                <div className="footer-column">

                    <h3>Enlaces</h3>

                    <ul>

                        <li>
                            <Link to="/">
                                <FaHome />
                                <span>Inicio</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/nosotros">
                                <FaUsers />
                                <span>Nosotros</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/preguntas-frecuentes">
                                <FaQuestionCircle />
                                <span>Preguntas Frecuentes</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/contacto">
                                <FaPhoneAlt />
                                <span>Contáctanos</span>
                            </Link>
                        </li>

                    </ul>

                </div>


                {/* CONTACTO */}

                <div className="footer-column footer-contact">

                    <h3>Contacto</h3>

                    <div className="footer-contact-item">

                        <FaMapMarkerAlt />

                        <p>
                            Dirección de la empresa
                        </p>

                    </div>


                    <div className="footer-contact-item">

                        <FaEnvelope />

                        <a href="mailto:contacto@ssm.com">
                            contacto@ssm.com
                        </a>

                    </div>

                </div>

            </div>


            {/* COPYRIGHT */}

            <div className="footer-bottom">

                <p>
                    © 2026 SSM. Todos los derechos reservados.
                </p>

            </div>

        </footer>

    );

}

export default Footer;

